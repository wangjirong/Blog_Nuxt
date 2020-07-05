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
        :navigation="true"
        codeStyle="tomorrow-night"
        :scrollStyle="false"
        :boxShadow="false"
        previewBackground="#fff"
      />
    </client-only>
    <Info :info="blog" />
    <Share />
    <Comment />

    <div class="comment-group flex-column">
      <CommentMessage
        v-for="comment in blog.comment"
        :key="comment._id"
        :comment="comment"
      />
    </div>
  </div>
</template>

<script>
import { formDataBlog } from '../../util/blog'

import CommentMessage from '../../components/public/Comment/CommentMessage'
export default {
  layout: 'cover',
  components: {
    Share: () => import('../../components/blog/detail/Share'),
    Info: () => import('../../components/blog/detail/Info'),
    Comment: () => import('../../components/blog/detail/Comment'),
    CommentMessage,
  },
  async asyncData({ params, $axios }) {
    const { id } = params
    const { data } = await $axios.get(`/blog/detaile/${id}`)

    if (data) return { blog: formDataBlog(data) }
  },
  methods: {
    async addReadCount() {
      await this.$axios.get(`/blog/addReadCount?_id=${this.$route.params.id}`)
    },
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
