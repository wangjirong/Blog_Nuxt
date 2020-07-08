<template>
  <div class="home">
    <Remark />
    <Swipper :blogList="swipper" />
    <ul class="blog-group">
      <li v-for="blog in blogList" :key="blog._id">
        <BlogItem :blog="blog" />
      </li>
    </ul>
  </div>
</template>
<script>
import Swipper from '../components/public/swipper'
import BlogItem from '../components/blog/BlogItem'
import Remark from '../components/Home/remarks'

import { setCookieQQLogin, getCookie } from '../util/cookie'

export default {
  name: 'Home',
  async asyncData({ $axios }) {
    const list = await $axios.get('/blog/getBlogs?pageIndex=1&pageSize=10')
    const swipper = await $axios.get('/blog/getSwipper')
    return {
      blogList: list.data,
      swipper: swipper.data,
    }
  },
  components: {
    BlogItem,
    Swipper,
    Remark,
  },
  head() {
    return {
      title: '艾瑞的个人博客',
      meta: [
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: 'cirev.cn,blog.cirev.cn,m.cirev.cn',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: '艾瑞的个人博客',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: '艾瑞的个人博客、站点',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: '艾瑞·前端',
        },
        {
          hid: 'description',
          name: 'description',
          content: '艾瑞的个人博客、站点',
        },
      ],
    }
  },
}
</script>
<style lang="less" scoped>
.home {
  width: 50vw;
}
</style>
