<template>
  <div class="board flex-column-start">
    <div class="title-des flex-column-center">
      <h3 class="title">留言板</h3>
      <h5 class="desc">就让我们一直走下去，直到世界一片纯白。</h5>
    </div>
    <client-only>
      <mavon-editor
        v-model="text"
        :toolbarsFlag="false"
        defaultOpen="edit"
        placeholder="留下一点东西吧"
        :ishljs="true"
        :subfield="false"
        codeStyle="tomorrow-night"
        :scrollStyle="false"
        :boxShadow="true"
        previewBackground="#fff"
      />
    </client-only>
    <button class="btn" @click="submit">
      提交留言
    </button>
  </div>
</template>

<script>
import browser from '../../util/browser'
export default {
  data() {
    return {
      text: '',
      location: '',
      user: this.$store.getters.getUser,
    }
  },
  methods: {
    async submit() {
      if (!this.text) this.$Message.error('留言内容不能为空！')
      else if (JSON.stringify(this.user) === '{}')
        this.$Message.error('请先登录！')
      else {
        const { status } = await this.$axios.post('/message/leaveMessage', {
          user: this.user,
          browser: browser(),
          location: this.location,
          text: this.text,
        })
        if (status === 200) this.$Message.success('留言成功')
        else this.$Message.error('留言失败')
        location.reload();
      }
    },
    getLocation() {
      var myCity = new BMap.LocalCity()
      myCity.get((result) => {
        this.location = result.name
      })
    },
  },
  async created() {
    await this.getLocation()
  },
}
</script>

<style lang="less">
.board {
  width: 70vw;
  height: 50vh;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 1em 2em;
  border-radius: 10px;
  .title-des {
    .title {
      font-size: 1.6em;
      margin: 0;
      font-family: 'Times New Roman', Times, serif;
    }
    .desc {
      font-size: 1.2em;
      font-family: 'Times New Roman', Times, serif;
      margin: 0.5em 0;
    }
  }
  .btn {
    padding: 0.3em 0.7em;
    font-size: 1.2em;
    color: #ffffff;
    background-color: red;
    border-radius: 5px;
    margin-top: 1em;
    &:hover {
      background-color: yellowgreen;
    }
  }
}
.v-note-wrapper {
  min-height: 200px !important;
}
</style>
