<template>
  <div class="_app background">
    <EHeader />
    <nuxt class="container" />
    <EFooter />
    <BackTop :bottom="60" :height="100"></BackTop>
  </div>
</template>
<script>
import EHeader from '../components/public/header'
import EFooter from '../components/public/footer'
export default {
  components: {
    EHeader,
    EFooter,
  },
}
</script>
<style lang="less" scoped>
._app {
  width: 100vw;
  padding-top: 5vh;
  background: url('https://iri-blog.oss-cn-beijing.aliyuncs.com/blog-cover/PC/Menu/timeLine.jpg');
  background-attachment: fixed;
  > .container {
    width: 60vw;
    margin: 7vh auto;
    min-height: 93vh;
    padding-top: 3em;
    text-align: center;
    background-color: rgba(255, 255, 255, 1);
  }
}
</style>
