<template>
  <div class="message-item">
    <div class="_message flex-vertical-start-top">
      <img
        :src="message.user.avatar"
        alt=""
        class="avatar"
        width="45"
        height="45"
      />
      <div class="nickname-browser-text-date-time">
        <div class="nickname-browser flex-vertical-start">
          <span class="nickName">{{ message.user.nickName }}</span>
          <span class="browser">{{ message.browser }}</span>
        </div>
        <div class="tex" v-html="message.text"></div>
        <div class="location-time flex-vertical-start">
          <div class="location center">
            <Icon type="ios-send" />
            <span>{{ message.location }}</span>
          </div>
          <div class="time">{{ message.time }}</div>
          <button class="reply">回复</button>
        </div>
      </div>
    </div>
    <div class="_reply-group"></div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="less" scoped>
.message-item {
  border-bottom: 1px dotted #cccccc;
  padding: 0.3em 0;
  ._message {
    .avatar {
      display: block;
      height: 40px;
      width: 40px;
      margin-right: 1em;
    }
    .nickname-browser-text-date-time {
      .nickname-browser {
        .nickName {
          font-size: 1em;
          color: #01aaed;
          margin-right: 1em;
        }
        .browser {
          color: #a93838;
        }
      }
      .tex {
        margin: 0.3em;
        overflow: hidden;
        word-wrap: break-word;
        white-space: pre-line;
        font-size: .9em;
      }
      .location-time {
        .location {
          i {
            font-size: 1.5em;
          }
          span {
            font-size: 0.9em;
          }
        }
        .time {
          font-size: 0.9em;
          margin: 0 1em;
        }
        > .reply {
          color: #009688;
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
