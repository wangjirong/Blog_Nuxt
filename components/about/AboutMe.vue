<template>
  <div class="about-me about-item">
    <div class="title">关于我</div>
    <div class="content">
      <div class="text">
        目前就读于JLU CS，大三，前端菜鸡一枚！没有人比我更菜！
      </div>
      <div class="contact-way">
        <div class="title">你可以通过以下方式联系我：</div>
        <div class="way-group flex-vertical-start">
          <a
            class="way-item"
            title="点击添加好友:408718358"
            href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=408718358"
          >
            <img
              src="https://iri-blog.oss-cn-beijing.aliyuncs.com/client-image/about/QQ.png"
              width="35"
              height="35"
              alt
            />
          </a>
          <div class="way-item">
            <Poptip trigger="hover" padding="0">
              <img
                src="https://iri-blog.oss-cn-beijing.aliyuncs.com/client-image/about/weiChat.png"
                width="35"
                height="35"
                alt
              />
              <img
                src="https://iri-blog.oss-cn-beijing.aliyuncs.com/client-image/about/irui_weichat.png"
                slot="content"
                width="160"
                height="160"
                alt
              />
            </Poptip>
          </div>
          <a class="way-item" href="https://github.com/wangjirong" title="https://github.com/wangjirong" target="_blank">
            <img
              src="https://iri-blog.oss-cn-beijing.aliyuncs.com/client-image/about/github.png"
              width="35"
              height="35"
              alt
            />
          </a>
          <a href="mailto:408718358@qq.com" class="way-item" title="我的邮箱:408718358@qq.com" target="_blank">
            <img
              src="https://iri-blog.oss-cn-beijing.aliyuncs.com/client-image/about/mail.png"
              width="35"
              height="35"
              alt
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style lang="less" scoped>
.contact-way {
  > .title {
    margin: 0.5em 0;
  }
  > .way-group {
    padding: 0.5em 1em;
    .way-item {
      display: block;
      margin: 0 1em;
    }
  }
}
</style>
