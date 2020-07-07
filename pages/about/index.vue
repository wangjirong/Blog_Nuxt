<template>
  <div class="about">
    <AboutMe />
    <AboutSite />
    <AboutState />
  </div>
</template>

<script>
export default {
  layout: 'about',
  components: {
    AboutMe: () => import('../../components/about/AboutMe'),
    AboutSite: () => import('../../components/about/AboutSite'),
    AboutState: () => import('../../components/about/State'),
  },
  head() {
    return {
      title: '艾瑞·关于',
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: '关于-艾瑞！',
        },
        {
          hid: 'description',
          name: 'description',
          content: '艾瑞前端，艾瑞的个人博客，关于艾瑞！',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: '艾瑞前端，艾瑞的个人博客，关于艾瑞！',
        },
      ],
    }
  },
}
</script>
<style lang="less">
.about-item {
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  padding: 1em 2em;
  border-radius: 5px;
  margin-bottom: 2em;
  > .title {
    border-left: 5px solid lightgreen;
    padding-left: 1em;
    margin-bottom: 1em;
    font-size: 1.2em;
  }
  > .content {
    margin-left: 1em;
    .structure {
      margin: 1em 0;
      .text {
        padding: 0.2em 0;
        letter-spacing: 0.5em;
      }
      code {
        letter-spacing: 0;
        background-color: #eee;
        padding: 0.2em 0.5em;
        color: darkred;
      }
    }
  }
}
</style>
