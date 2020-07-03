<template>
  <div class="leaveMessage flex-column-top">
    <no-ssr>
      <Board />

      <div class="message-group">
        <Message v-for="item in messageList" :key="item._id" :message="item" />
      </div>
    </no-ssr>
  </div>
</template>

<script>
import fromData from '../../util/message'
export default {
  layout: 'message',
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/message/getAllMessage')
    return { messageList: fromData(data) }
  },
  components: {
    Board: () => import('../../components/message/LeaveMessageBoard'),
    Message: () => import('../../components/message/Message'),
  },
}
</script>

<style lang="less" scoped>
.leaveMessage {
  padding-top: 5em;
}

.message-group {
  width: 70vw;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  padding: 1em 2em;
  margin: 5em auto;
}
</style>
