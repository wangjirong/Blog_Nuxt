<template>
  <div id="right" :class="toTop ? 'topFixed' : ''">
    <Production />
    <Statistics :info="info" />
    <RecentPeople :users="users" />
  </div>
</template>

<script>
import Statistics from './statistics'
import RecentPeople from './recentPeople'
import Production from './Production'
export default {
  components: {
    Statistics,
    RecentPeople,
    Production,
  },
  data() {
    return {
      toTop: false,
      users: [],
      info: {},
    }
  },
  async fetch() {
    const { data } = await this.$axios.get('/site/statics')
    this.users = data.user
    this.info = {
      blogCount: data.blogCount,
      messageCount: data.messageCount,
      userCount: data.user.userCount,
    }
  },
}
</script>

<style lang="less" scoped>
#right {
  width: 19vw;
  padding: 0 1vw;
  position: fixed;
  top: 10vh;
  right: 14vw;
  > * {
    margin-bottom: 3vh;
  }
}
.topFixed {
  position: fixed;
  top: 12vh;
  right: 12vw;
}
</style>
