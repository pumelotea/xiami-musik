<template>
  <div class="padder">
    <div class="official-board">1</div>
    <div class="board2">
      <div class="list" v-for="x in 2">
        <div class="list-item" style="padding-right: 20px;">
          <BillboardItem2/>
        </div>
        <div class="list-item">
          <BillboardItem2/>
        </div>
      </div>
    </div>
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
  import BillboardItem2 from '@/components/BillboardItem2'
  export default {
    components:{
      BillboardItem,BillboardItem2
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
    margin-top: 50px;
  }

  .board3 {
    width: 100%;
    margin-top: 50px;
  }

  .list {
    position: relative;
    display: flex;
    margin-bottom: 60px;
  }

  .list-item{
    width: 50%;
  }


</style>
