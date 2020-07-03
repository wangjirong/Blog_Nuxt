<template>
  <div class="qq-oauth">
    <Spin fix v-if="loading">
      <Icon type="ios-loading" size="18" class="demo-spin-icon-load"></Icon>
      <div>登录中</div>
    </Spin>
  </div>
</template>

<script>
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
      const url =
        'http://cirev.cn/oAuth/qqRedirect?#access_token=FF3CC11CC21C30B774C3732490244E5E&expires_in=7776000'
      this.$route.fullPath.match(/#access_token=([0-9a-zA-Z]+)&/)
      const accessToken = RegExp.$1
      const { data } = await this.$axios.get(
        `/user/qqLogin?access_token=${accessToken}`
      )
      this.$store.dispatch('SetUser', data)
      this.loading = false
      this.$message.success('登录成功！')
      this.$router.back()
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
