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
._app{
    background: url("https://erics-bucket.oss-cn-beijing.aliyuncs.com/Background-Image/PC/Menu/aboutPage_big_bg_img.jpg");
    background-attachment: fixed;
    .container{
        margin-top: 7vh;
        min-height: 93vh;
        padding-top: 3em;
    }

}
</style>
