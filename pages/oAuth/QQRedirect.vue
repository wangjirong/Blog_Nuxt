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
      const accessToken = this.$route.query.access_token
      const { data } = await this.$axios.get(
        `/user/qqLogin?access_token=${accessToken}`
      )
      console.log(data)
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
