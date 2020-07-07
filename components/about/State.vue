<template>
  <div class="state about-item">
    <div class="title">特别说明</div>
    <div class="content">
      <div class="text">本站文章仅代表个人观点，和任何组织或个人无关。</div>
      <div class="text">本站前端开发代码没有考虑对IE浏览器的兼容。</div>
      <div class="text">有兴趣欢迎一起讨论代码，交流技术</div>
    </div>
    <img src="https://iri-blog.oss-cn-beijing.aliyuncs.com/client-image/about/about-state.jpg" alt="">
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.text:nth-child(2){
  margin: .3em 0;
}
.content{
  margin-bottom: 1em;
}
img{
  display: block;
  width: 100%;
}
</style>
