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
    <no-ssr>
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
    </no-ssr>
    <Info :info="blog" />
    <Share />
    <Comment/>
  </div>
</template>

<script>
import {
  getJustDay,
  getYearAndMonth,
  getJustTime,
} from '../../util/time.filter'

import toolbars from '../../config/mavon-editor'

export default {
  layout: 'noRightBar',
  data() {
    return {
      toolbars,
    }
  },
  components: {
    Share: () => import('../../components/blog/detail/Share'),
    Info: () => import('../../components/blog/detail/Info'),
    Comment:()=>import('../../components/blog/detail/Comment')
  },
  async asyncData({ params, $axios }) {
    const { id } = params
    const { data } = await $axios.get(`/blog/detaile/${id}`)
    return { blog: data}
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

.v-note-wrapper{
  z-index: 1 !important;
}
</style>
