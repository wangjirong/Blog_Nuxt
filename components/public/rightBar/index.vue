<template>
  <div id="right" :class="toTop?'topFixed':''">
    <Production/>
    <Statistics :statistics="statistics" />
    <RecentPeople />
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
    Production
  },
  data() {
    return {
      toTop:false,
      statistics: {
        runtime: 12,
        blogCount: 23,
        vistorCount: 123,
      },
    }
  },
  methods: {
    handleScroll() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      const offsetTop = document.querySelector('#right').offsetTop
      const headHeight = document.body.clientHeight*7/100
      
      if (scrollTop > (offsetTop)) {
        this.toTop = true
      } else {
        this.toTop = false
      }
    },
  },
  mounted() {
    // window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
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
.topFixed{
  position: fixed;
  top: 12vh;
  right: 12vw;
}
</style>
