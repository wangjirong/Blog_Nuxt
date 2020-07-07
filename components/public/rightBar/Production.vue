<template>
  <div class="production">
    <div class="avatar-name">
      <img
        class="bg-image"
        src="https://erics-bucket.oss-cn-beijing.aliyuncs.com/reWriteBlogSource/image/home/p-resume-bg.jpg"
        alt
      />
      <img src="https://iri-blog.oss-cn-beijing.aliyuncs.com/client-image/home/zhangguorong.JPG" alt class="avatar" />
      <h3 class="_name">艾瑞</h3>
      <p class="desc">
        十年生死两茫茫，不思量，自难忘。千里孤坟，无处话凄凉。纵使相逢应不识，尘满面，鬓如霜。
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style lang="less" scoped>
.production {
  width: 100%;
  border-radius: 5px;
  background-color: #ffffff;
  .avatar-name {
    width: 100%;
    position: relative;
    .bg-image {
      display: block;
      width: 100%;
      height: auto;
      margin-bottom: 40px;
    }
    .avatar {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: 60px auto;
      display: block;
      height: 85px;
      width: 85px;
      border-radius: 50%;
    }
    ._name {
      text-align: center;
      font-size: 15px;
      color: aquamarine;
      padding: 3px 0;
    }
    .desc {
      text-indent: 2em;
      font-size: 12px;
      padding: 1px 5px 5px;
    }
  }
  .count {
    width: 100%;
    .title {
      font-size: 14px;
      padding: 5px;
      text-align: center;
    }
    .count-group {
      width: 100%;
      padding: 2px 20px;
      > * {
        flex: 1;
      }
    }
  }
}

img.info-image {
  display: block;
  height: 180px;
  width: 160px;
}
</style>
