<template>
  <div class="info flex-column-start">
    <h3 class="eric">非特殊说明，本文版权归 艾瑞 所有，转载请注明出处</h3>
    <h3 class="title">本文标题:{{ info.title }}</h3>
    <h3 class="href">地址:
        <a :href="'http://cirev.cn/blog/'+info._id" target="_blank" rel="noopener noreferrer">
        http://cirev.cn/blog/{{info._id}}
        </a>
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="less" scoped>
.info{
    margin: 1em 0;
    padding: 1em 2em;
    background-color: rgba(255, 255, 255, 0.9);
    h3{
        font-size: 1.2em;
        font-family: 'Times New Roman', Times, serif;
        padding: .3em 0;
        color: #000;
        a{
            &:hover{
                text-decoration: underline;
            }
        }
    }
}
</style>
