<template>
  <div class="padder">
    <div class="official-board">1</div>
    <div class="board2">2</div>
    <div class="board3">
      <div class="title">全球媒体榜</div>
      <div class="list" v-for="x in 2">
        <BillboardItem v-for="x in 4"/>
      </div>
    </div>
  </div>
</template>

<script>
  import BillboardItem from '@/components/BillboardItem'
  export default {
    components:{
      BillboardItem
    }
  }
</script>

<style scoped>
  .padder {
    padding: 30px;
    position: relative;
  }

  .title {
    font-size: 24px;
    color: #444444;
    padding: 5px;
  }

  .official-board {
    width: 100%;
    height: 350px;
    background: #cac8ca;
  }

  .board2 {
    width: 100%;
    height: 400px;
    background: deepskyblue;
  }

  .board3 {
    width: 100%;
    height: 400px;
  }

  .list {
    position: relative;
    display: flex;
    margin-bottom: 60px;
  }


</style>
