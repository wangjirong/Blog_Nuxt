<template>
  <div class="leaveMessage flex-column-top">
    <Board/>
  </div>
</template>

<script>
export default {
  layout:"message",
  components:{
    Board:()=>import('../../components/message/LeaveMessageBoard')
  }

}
</script>

<style lang="less" scoped>
.leaveMessage{
  padding-top: 5em;
}
</style>