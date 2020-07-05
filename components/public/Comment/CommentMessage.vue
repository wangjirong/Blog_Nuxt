<template>
  <div class="comment-item">
    <div class="_comment">
      <div class="avatar-name-text flex-vertical-start">
        <img :src="comment.user.avatar" alt="" class="avatar" />
        <div class="name-text">
          <p class="nickName">{{ comment.user.nickName }}</p>
          <p class="text" v-html="comment.text"></p>
        </div>
      </div>
      <div class="time-reply-btn flex-vertical-start">
        <div class="time-reply flex-vertical-start">
          <span class="time">{{ comment.time }}</span>
          <button class="reply">回复</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formDataComments } from '../../../util/comment'
export default {
  name: 'CommentMessage',
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
  components: {
    // Reply: () => import('./reply'),
  },
  created() {
    formDataComments(this.comment)
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
          font-size: 1em;
        }
        .text {
          font-size: .9em;
          word-wrap: break-word;
          white-space: pre-line;
        }
      }
    }
    > .time-reply-btn {
      margin-left: 55px;
      > .time-reply {
        .time {
          font-size: 0.9em;
          margin-right: 1em;
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
}
</style>
