<template>
  <div class="_app background">
    <EHeader class="e-header" />
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
  background-image: url('https://iri-blog.oss-cn-beijing.aliyuncs.com/blog-cover/PC/Menu/005100-1592412660d6f4.jpg');
  background-attachment: fixed;
  .container {
    width: 70vw;
    margin: 7vh auto 1vh;
    min-height: 93vh;
    padding-top: 3em;
  }
}
</style>
