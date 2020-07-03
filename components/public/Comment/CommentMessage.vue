<template>
  <div class="comment-item">
    <div class="_comment">
      <div class="avatar-name-text flex-vertical-start">
        <img :src="comment.user.avatar" alt="" class="avatar" />
        <div class="name-text">
          <p class="nickName">{{ comment.user.nickName }}</p>
          <p class="text">{{ comment.text }}</p>
        </div>
      </div>
      <div class="time-reply-btn flex-vertical-start">
        <div class="date-time flex-vertical-start">
          <span class="date">{{ comment.date }}</span>
          <span class="time">{{ comment.time }}</span>
        </div>
        <button class="reply">回复</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentMessage',
  props: {
    comment,
  },
  components: {
    Reply: () => import('./reply'),
  },
}
</script>

<style lang="less" scoped>
p {
  margin: 0;
}
.comment-item {
  width: 100%;
  ._comment {
    border-bottom: 1px dotted #dddddd;
    padding: 0.2em;
    .avatar-name-text {
      > .avatar {
        display: block;
        height: 45px;
        width: 45px;
      }
      > .name-text {
        margin-left: 1em;
        .nickName {
          color: #01aaed;
          font-size: 1.2em;
        }
        .text {
          font-size: 1em;
        }
      }
    }
    > .time-reply-btn {
      margin: 0.5em 0 0 55px;
      > .date-time {
        .date {
          font-size: 0.9em;
        }
        .time {
          font-size: 0.9em;
          margin: 0 1em 0 0.5em;
        }
      }
      > .reply {
        color: mediumseagreen;
        font-size: 0.9em;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
