<template>
  <div class="blog-item-detail">
    <div class="title-date flex-vertical-space">
      <div class="title-tags-time flex-column-space">
        <h3 class="title">{{ blog.title }}</h3>
        <div class="infos flex-vertical-space">
          <span class="author center" title="作者"
            ><Icon type="ios-contact-outline" />{{ blog.author }}</span
          >
          <span class="tags center" title="标签"
            ><Icon type="md-pricetags" />{{ blog.tag }}</span
          >
          <span class="time center" title="更新时间"
            ><Icon type="ios-clock" />{{ blog.time }}</span
          >
        </div>
      </div>
      <div class="date flex-column-center">
        <div class="day">{{ blog.day }}</div>
        <div class="year-month">{{ blog.monthYear }}</div>
      </div>
    </div>
    <client-only>
      <mavon-editor
        v-model="blog.context"
        :editable="false"
        :toolbarsFlag="false"
        defaultOpen="preview"
        :ishljs="true"
        :subfield="false"
        codeStyle="tomorrow-night"
        :scrollStyle="false"
        :boxShadow="false"
        previewBackground="#fff"
      />
      <Info :info="blog" />
      <Share />
      <Comment />
      <div class="comment-group flex-column">
        <CommentMessage
          v-for="item in comments"
          :key="item._id"
          :comment="item"
        />
      </div>
    </client-only>
  </div>
</template>

<script>
import {
  getJustDay,
  getYearAndMonth,
  getJustTime,
} from '../../util/time.filter'

import toolbars from '../../config/mavon-editor'

import CommentMessage from '../../components/public/Comment/CommentMessage'

export default {
  layout: 'cover',
  data() {
    return {
      toolbars,
      comments: [
        {
          _id: 1,
          user: {
            avatar:
              'https://thirdqq.qlogo.cn/g?b=oidb&k=A9LeLeujPSgib350g5XKdfw&s=100&t=1556431501',
            nickName: '302',
          },
          date: '2020-07-02',
          time: '21:23',
          text: '淦你老母',
          replys: [
            {
              fromUser: {
                _id: '1232',
                nickName: '皮卡丘',
                avatar:
                  'https://thirdqq.qlogo.cn/g?b=oidb&k=Epbsm37OJYClvFNQHubxKg&s=100&t=1568901205',
              },
              toUser: {
                id: '234',
                nickName: '302',
                avatar:
                  'https://thirdqq.qlogo.cn/g?b=oidb&k=A9LeLeujPSgib350g5XKdfw&s=100&t=1556431501',
              },
              date: '2020-12-30',
              time: '21:40',
              text: 'what are you nong sha ne !',
            },
            {
              fromUser: {
                id: '234',
                nickName: '302',
                avatar:
                  'https://thirdqq.qlogo.cn/g?b=oidb&k=A9LeLeujPSgib350g5XKdfw&s=100&t=1556431501',
              },
              toUser: {
                _id: '1232',
                nickName: '皮卡丘',
                avatar:
                  'https://thirdqq.qlogo.cn/g?b=oidb&k=Epbsm37OJYClvFNQHubxKg&s=100&t=1568901205',
              },

              date: '2020-12-30',
              time: '21:45',
              text: '弄你的头!',
            },
          ],
        },
        {
          _id: 2,
          user: {
            avatar:
              'https://thirdqq.qlogo.cn/g?b=oidb&k=jFK6bbFWtqkz9vT0Mtg9rA&s=100&t=1557219684',
            nickName: '302',
          },
          date: '2020-07-02',
          time: '11:13',
          text: '摩西摩西',
        },
        {
          _id: 3,
          user: {
            avatar:
              'https://thirdqq.qlogo.cn/g?b=oidb&k=ZcZHOjFOqbd6ZNzgRSct5A&s=100&t=1554563093',
            nickName: '西瓜不红',
          },
          date: '2020-07-02',
          time: '01:33',
          text: '呵呵哒',
        },
      ],
    }
  },
  components: {
    Share: () => import('../../components/blog/detail/Share'),
    Info: () => import('../../components/blog/detail/Info'),
    Comment: () => import('../../components/blog/detail/Comment'),
    CommentMessage,
  },
  async asyncData({ params, $axios }) {
    const { id } = params
    const { data } = await $axios.get(`/blog/detaile/${id}`)
    return { blog: data }
  },
  methods: {
    formDate(blog) {
      blog.day = getJustDay(blog.date)
      blog.monthYear = getYearAndMonth(blog.date)
      blog.tag = blog.tags.join('、')
      blog.time = getJustTime(blog.date)
    },
    async addReadCount() {
      await this.$axios.get(`/blog/addReadCount?_id=${this.$route.params.id}`)
    },
  },
  created() {
    this.formDate(this.blog)
  },
  mounted() {
    this.addReadCount()
  },
}
</script>

<style lang="less">
.blog-item-detail {
  width: 100%;
  height: 100%;
  .title-date {
    width: 100%;
    background-color: rgba(255, 255, 255, 1);
    padding: 5px 2em;
    border-radius: 5px;
    align-items: flex-start;
    .title-tags-time {
      padding: 5px;
      .title {
        font-size: 1.6em;
        font-family: 'Times New Roman', Times, serif;
        margin-bottom: 10px;
      }
      .infos {
        width: 100%;
        text-indent: 2em;
        flex-wrap: nowrap;
        span {
          // padding:  1em 0 0 0;
          cursor: pointer;
          font-size: 1em;
          i {
            margin-right: 5px;
          }
          &:hover {
            color: red;
          }
        }
      }
    }
    .date {
      .day {
        font-size: 2.5em;
        color: lightgreen;
      }
      .year-month {
        font-size: 1.3em;
      }
    }
  }
}

.v-note-wrapper {
  z-index: 1 !important;
}

.comment-group {
  width: 70vw;
  padding: 1em 2em;
  background-color: rgba(255, 255, 255, 0.9);
}
</style>
