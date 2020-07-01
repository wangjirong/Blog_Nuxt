<template>
  <div class="comment flex-column-start">
    <h3 class="title">发表评论</h3>
    <Input
      class="text"
      v-model="text"
      type="textarea"
      placeholder="说点什么吧……"
      :rows="4"
    />
    <button id="submit" @click="submit">提交</button>
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
    async submit() {
      if (!this.text) this.$Message.error('评论不能为空')
      else if (true) this.$Message.warning('请先登录！')
      else {
        const { status } = await this.$axios.post(`/blog/comment/`)
      }
    },
  },
}
</script>

<style lang="less">
.comment {
  padding: 1em 2em;
  margin: 1em 0;
  background-color: rgba(255, 255, 255, 0.9);
  > .title {
    font-size: 1.3em;
    color: #000;
    font-family: 'Times New Roman', Times, serif;
  }
  > .text {
    margin: 0.5em 0;
  }
  > button {
    padding: 0.35em 1.2em;
    background-color: #8b0000;
    color: #fff;
    border-radius: 5px;
    font-size: 1.2em;
    &:hover {
      background-color: lightgreen;
    }
  }
}
textarea.ivu-input{
    text-indent: 2em;
}
</style>
