<template>
  <div class="links flex-column-top">
    <ApplyDesc />
    <div class="link-group flex-vertical-start">
      <LinkItem v-for="item in linkList" :key="item._id" :item="item" />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'link',
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
  width: 70vw;
  margin: 0 auto;
  .link-group{
    margin: 1em 0;
    width: 100%;
  }
}
</style>
