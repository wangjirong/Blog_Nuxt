<template>
  <div class="category">
    <div class="search-nav-tags flex-column-center">
      <Input
        class="input-keyword"
        v-model="keyword"
        search
        allowClear
        placeholder="请输入关键词"
        @on-search="search"
      />
      <div class="tags flex-vertical-left">
        <Tag
          type="border"
          v-for="item in tags"
          :key="item._id"
          :color="getRandomColor()"
          size="large"
          style="margin: 0.5em;"
          @click.native="search(item.tagName)"
          >{{ item.tagName }}</Tag
        >
      </div>
    </div>
  </div>
</template>

<script>
import { tagColor } from '../../config/tags'
import getRandomColor from '../../util/color'
export default {
  layout: 'noRightBar',
  data() {
    return {
      keyword: '',
    }
  },
  async asyncData({ $axios }) {
    const res1 = await $axios.get('/tag/getAllTags')
    const res2 = await $axios.get('/blog/getAllBlogs')
    return { tags: res1.data, blogList: res2.data }
  },
  methods: {
    getRandomColor() {
      return getRandomColor()
    },
    async search(keyword) {
      this.keyword = keyword
      const { data } = await this.$axios.get(
        `/blog/searchBlog?keyword=${keyword}`
      )
      if (data.length === 0) {
        this.$Message.error('暂无数据')
        keyword = ''
        return (this.blogList = await this.getAllBlogs())
      }
    },
    async getAllBlogs() {
      const { data } = await this.$axios.get('/blog/getAllBlogs')
      return data
    },
  },
}
</script>

<style lang="less">
.category {
  width: 100%;
  padding: 0 2em;
  .search-nav-tags {
    width: 100%;
    .input-keyword {
      width: 90%;
      text-align: center;
      margin-bottom: 1em;
      input{
        text-align: center;
      }
    }
    .tags {
      width: 90%;
      flex-wrap: wrap;
    }
  }
}
</style>
