<template>
  <div class="_app background">
    <EHeader />
    <div class="container">
      <nuxt/>
      <Right/>
    </div>

    <EFooter />

     <BackTop :bottom="60" :height="100"></BackTop>
  </div>
</template>
<script>
import EHeader from '../components/public/header'
import EFooter from '../components/public/footer'

import Right from '../components/public/rightBar/index'
export default {
  components:{
EHeader,EFooter,Right
  }
}
</script>
<style lang="less" scoped>
._app{
  background-color: #ffffff;
  min-height: 100vh;
  
  .container{
    width: 70vw;
    margin: 7vh 15vw 1vh;
    padding: 3vh 1vw;
    min-height: 100vh;
    background-color: #eeeeee;
    box-shadow: 5px 5px 5px 15px rgba(100, 100, 100, 0.5);
    display: flex;
    justify-content: space-between;
  }
}
</style>


