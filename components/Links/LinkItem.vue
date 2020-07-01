<template>
  <a :href="item.href" target="_blank" class="link-item">
    <div class="logo-title flex-vertical-start">
      <img
        :src="item.logo"
        width="30"
        height="30"
        :alt="item.title"
        class="logo"
      />
      <span class="title">{{ item.title }}</span>
    </div>
    <div class="desc">{{ item.desc }}</div>
  </a>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="less" scoped>
.link-item {
  display: block;
  background-color: rgba(255, 255, 255, .8);
  margin: 1em;
  height: 16vh;
  width: 16vw;
  padding: 1em;
  border-radius: 5px;
  color: #333;
  transition: ease-in-out 1s;
  &:hover {
    transform: scale(1.1);
  }
  .logo-title {
    margin-bottom: 1.5em;
    .logo {
      border-radius: 50%;
      margin-right: 2em;
    }
    .title{
        font-size: 1.2em;
    }
  }
  .desc{
      font-size: 1.1em;
  }
}
</style>
