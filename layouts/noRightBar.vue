<template>
  <div class="_app background">
    <EHeader />
    <div class="container">
      <nuxt />
    </div>

    <EFooter />

    <BackTop :bottom="60" :height="100"></BackTop>
  </div>
</template>

<script>
import EHeader from '../components/public/header'
import EFooter from '../components/public/footer'
export default {
  components:{
EHeader,EFooter
  }
}
</script>

<style lang="less" scoped>
._app{
  // background: url("https://erics-bucket.oss-cn-beijing.aliyuncs.com/Background-Image/PC/Index_Home/homePage_big_bg_img3.jpg") fixed;
  background-color: #eeeeee;
  min-height: 100vh;
  
  .container{
    width: 70vw;
    margin: 7vh 15vw 1vh;
    padding: 3vh 1vw;
    min-height: 100vh;
    box-shadow: 5px 5px 5px 15px rgba(100, 100, 100, 0.5);
  }
}
</style>