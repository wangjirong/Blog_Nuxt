<template>
  <div class="comment flex-column-start">
    <h3 class="title">发表评论</h3>
    <client-only>
      <mavon-editor
        v-model="text"
        :toolbarsFlag="false"
        defaultOpen="edit"
        placeholder="评论……"
        :ishljs="true"
        :subfield="false"
        codeStyle="tomorrow-night"
        :scrollStyle="false"
        :boxShadow="true"
        previewBackground="#fff"
      />
    </client-only>
    <button id="submit" @click="submit">提交</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      user: {},
    }
  },
   mounted(){
    this.user = this.global.getUser()
  },
  methods: {
    async submit() {
      if (!this.text) this.$Message.error('评论不能为空')
      else if (this.global.isEmpty(this.user)) this.$Message.error('请先登录！')
      else {
        const { status } = await this.$axios.post(`/blog/comment`, {
          text: this.text,
          _id: this.$route.params.id,
          user: this.user,
        })
        if (status === 200) this.$Message.success('评论成功！')
        else this.$Message.error('评论失败')
        location.reload()
      }
    },
  },
}
</script>

<style lang="less">
.v-note-wrapper {
  min-height: 100px !important;
}
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
    padding: 0.3em 1em;
    margin-top: 0.5em;
    background-color: #8b0000;
    color: #fff;
    border-radius: 5px;
    font-size: 1.2em;
    &:hover {
      background-color: lightgreen;
    }
  }
}
textarea.ivu-input {
  text-indent: 2em;
}
</style>
