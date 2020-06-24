<template>
  <div class="home">
    <Remark/>
    <Swipper :blogList="blogList" />
    <ul class="blog-group">
      <li v-for="blog in blogList" :key="blog.id">
        <BlogCard :blog="blog" />
      </li>
    </ul>
  </div>
</template>
<script>
import Swipper from '../components/public/swipper'
import BlogCard from "../components/blog/BlogItem";
import Remark from '../components/Home/remarks'
export default {
  name: "Home",
  async asyncData({ $axios }) {},
  data() {
    return {
      blogList: [
        {
          _id:1,
          title: "前端面试题-Vue篇（一）",
          desc:
            "vue的生命周期详解，父子组件生命周期顺序、父组件监听子组件生命周期方式",
          cover_img:
            "https://cdn.huidoo.com.cn/m/home_img03.jpg",
          date: "2020-05-23 15:28",
          tags: "Vue、Javascript",
          readCount: "20",
          commentCount: "30"
        },
        {
          _id:2,
          title: "前端面试题-Vue篇（二）",
          desc:
            "vue的生命周期详解，父子组件生命周期顺序、父组件监听子组件生命周期方式",
          cover_img:
            "https://cdn.huidoo.com.cn/m/home_img04.jpg",
          date: "2020-05-21 12:23",
          tags: "Vue、Javascript",
          readCount: "20",
          commentCount: "30"
        },
        {
          _id:3,
          title: "前端面试题-Vue篇（三）",
          desc:
            "vue的生命周期详解，父子组件生命周期顺序、父组件监听子组件生命周期方式",
          cover_img:
            "https://cdn.huidoo.com.cn/m/home_img01.jpg",
          date: "2020-05-23 12:49",
          tags: "Vue、Javascript",
          readCount: "20",
          commentCount: "30"
        },
        {
          _id:4,
          title: "前端面试题-Vue篇（四）",
          desc:
            "vue的生命周期详解，父子组件生命周期顺序、父组件监听子组件生命周期方式",
          cover_img:
            "https://cdn.huidoo.com.cn/m/home_img03.jpg",
          date: "2020-05-23 09:34",
          tags: "Vue、Javascript",
          readCount: "20",
          commentCount: "30"
        }
      ]
    };
  },
  components: {
    BlogCard,Swipper,Remark
  }
};
</script>
<style lang="less" scoped>
.home{
  width: 50vw;
}
</style>>


