<template>
  <div class="_reply">
    <div class="avatar-name-text flex-vertical-start">
      <img :src="reply.fromUser.avatar" alt="" class="avatar" />
      <div class="name-text">
        <span class="nickName">
          <span class="from-nickName">{{ reply.fromUser.nickName }}</span>
          <span class="huifu">回复</span>
          <span class="to-nickName">{{ reply.toUser.nickName }}</span>
        </span>

        <span class="text">{{ reply.text }}</span>
      </div>
    </div>
    <div class="time-reply-btn flex-vertical-start">
      <div class="date-time flex-vertical-start">
        <span class="date">{{ reply.date }}</span>
        <span class="time">{{ reply.time }}</span>
      </div>
      <button class="reply">回复</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reply,
  },
}
</script>

<style lang="less" scoped></style>
