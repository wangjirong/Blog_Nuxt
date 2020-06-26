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


export default {
  name: 'Home',
  async asyncData({ $axios }) {
    const list = await $axios.get(
      '/blog/getBlogs?pageIndex=1&pageSize=10'
    )
    const swipper = await $axios.get('/blog/getSwipper')
    return {
      blogList:list.data,
      swipper: swipper.data,
    }
  },
  data() {
    return {}
  },
  components: {
    BlogItem,
    Swipper,
    Remark,
  },
  created() {},
}
</script>
<style lang="less" scoped>
.home {
  width: 50vw;
}
</style
>>
