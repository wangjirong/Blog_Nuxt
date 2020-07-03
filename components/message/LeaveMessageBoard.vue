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
      // else if (!QC.Login.check()) this.$Message.error('请先登录！')
      else {
        if (!(JSON.stringify(this.user) === '{}')) {
          const { status } = await this.$axios.post('/message/leaveMessage', {
            user: this.user,
            browser: browser(),
            location: this.location,
            text: this.text,
          })
          if (status === 200) this.$Message.success('留言成功')
        } else this.$Message.error('留言失败')
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
