<template>
  <div class="diary">
    <a-timeline mode="alternate" pending="已经到底了！">
      <a-timeline-item v-for="item in diaryList" :key="item._id">
        <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
        <p class="time">{{ item.time }}</p>
        <p class="text">{{ item.text }}</p>
        <img :src="item.img.src" width="200" :alt="item.text" />
      </a-timeline-item>
    </a-timeline>
  </div>
</template>
<script>
import { formData } from '../../util/diary'
export default {
  layout: 'timeLine',
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/diary/getAllDiary')
    return { diaryList: formData(data) }
  },
  head() {
    return {
      title: '日记·记录学习、记录生活',
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: '日记·记录学习、记录生活',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: '艾瑞·前端的学习日志',
        },
        {
          hid: 'description',
          name: 'description',
          content: '艾瑞·前端的学习日志',
        },
      ],
    }
  },
}
</script>
<style lang="less" scoped>
.time {
  font-size: 1.3em;
  font-family: 'Times New Roman', Times, serif;
}
.text {
  font-size: 1.1em;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
}
</style>
