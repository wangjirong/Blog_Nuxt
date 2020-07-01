<template>
  <div class="links flex-column-start">
    <ApplyDesc />
    <div class="link-group flex-vertical-start">
      <LinkItem v-for="item in linkList" :key="item._id" :item="item" />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'noRightBar',
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/link/getAllLinks')
    return { linkList: data }
  },
  components: {
    ApplyDesc: () => import('../../components/Links/ApplyDesc'),
    LinkItem: () => import('../../components/Links/LinkItem'),
  },
  created() {
    console.log(this.linkList)
  },
}
</script>
<style lang="less" scoped>
.links {
  padding: 1em 2em;
  .link-group{
    margin: 1em 0;
  }
}
</style>
