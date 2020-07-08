<template>
  <div class="qq-oauth">
    <Spin fix v-if="loading">
      <Icon type="ios-loading" size="18" class="demo-spin-icon-load"></Icon>
      <div>登录中</div>
    </Spin>
  </div>
</template>

<script>
import { setCookieQQLogin, setCookie } from '../../util/cookie'
export default {
  layout: 'login',
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    this.login()
  },
  methods: {
    async login() {
      this.$route.fullPath.match(/#access_token=([0-9a-zA-Z]+)&/)
      const accessToken = RegExp.$1
      const { data } = await this.$axios.get(
        `/user/qqLogin?access_token=${accessToken}`
      )
      this.loading = false
      this.$message.success('登录成功！')
      const path = sessionStorage.getItem('history')
      this.$router.push(path)
    },
  },
}
</script>
<style>
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.demo-spin-col {
  height: 100px;
  position: relative;
  border: 1px solid #eee;
}
</style>
