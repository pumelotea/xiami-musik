<template>
  <div>
    <div class="official-board">
      <div class="padder">
        <div class="title-bar">
          <div class="board-title" style="float: left">虾米官方榜</div>
          <div style="float: left;margin-left: 30px">
            <Tab/>
          </div>
        </div>
        <div class="board2-content">
          <!--左侧图片-->
          <div class="music-cover">
            <img class="music-cover-img" src="texture/music-pic/1.jpg"/>
          </div>
          <!--右侧列表-->
          <div class="music-list">
            <div class="list-title-bar">
              <div class="play-all"><i style="color: rgba(255, 50, 0, 1);" class="icon-control-play"></i> 全部播放</div>
              <div class="all-music">全部 <i class="fa fa-angle-right"></i></div>
            </div>
            <div class="list-row-1">
              <div class="list-item-no">01</div>
              <div class="list-item-name">灰姑娘</div>
              <div class="list-item-singer">陈雪凝</div>
            </div>
            <div class="list-row-2">
              <div class="list-item-no">02</div>
              <div class="list-item-name">灰姑娘</div>
              <div class="list-item-singer">陈雪凝</div>
            </div>
            <div class="list-row-1">
              <div class="list-item-no">03</div>
              <div class="list-item-name">灰姑娘</div>
              <div class="list-item-singer">陈雪凝</div>
            </div>
            <div class="list-row-2">
              <div class="list-item-no">04</div>
              <div class="list-item-name">灰姑娘</div>
              <div class="list-item-singer">陈雪凝</div>
            </div>
            <div class="list-row-1">
              <div class="list-item-no">05</div>
              <div class="list-item-name">灰姑娘</div>
              <div class="list-item-singer">陈雪凝</div>
            </div>
            <div class="list-row-2">
              <div class="list-item-no">05</div>
              <div class="list-item-name">灰姑娘</div>
              <div class="list-item-singer">陈雪凝</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="padder">
      <div class="board2">
        <div class="list-2" v-for="x in 2">
          <div class="list-item" style="padding-right: 20px;">
            <BillboardItem2/>
          </div>
          <div class="list-item">
            <BillboardItem2/>
          </div>
        </div>
        <div class="list-2">
          <div class="list-item" style="padding-right: 20px;">
            <BillboardItem2/>
          </div>
          <div class="list-item">
          </div>
        </div>
      </div>

      <div class="board3">
        <div class="title">全球媒体榜</div>
        <div class="list-1" v-for="x in 2">
          <BillboardItem v-for="x in 4"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BillboardItem from '@/components/BillboardItem'
  import BillboardItem2 from '@/components/BillboardItem2'
  import Tab from '@/components/Tab2'

  export default {
    components: {
      BillboardItem, BillboardItem2, Tab
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
  }

  .official-board {
    width: 100%;
    height: 350px;
    background: #bfbfbf;
  }

  .board2 {
    width: 100%;
    margin-top: 50px;
  }

  .board3 {
    width: 100%;
    margin-top: 50px;
  }

  .list-1 {
    position: relative;
    display: flex;
    margin-bottom: 60px;
  }

  .list-2 {
    position: relative;
    display: flex;
    margin-bottom: 40px;
  }

  .list-item {
    width: 50%;
  }

  .title-bar {
    height: fit-content;
    float: left;
    width: 100%
  }

  .board-title {
    font-size: 25px;
    font-weight: bold;
    color: #434343;
  }

  .board2-content {
    float: left;
    width: 100%;
    margin-top: 30px
  }

  .music-cover {
    width: 30%;
    height: 200px;
    float: left;
    padding-right: 5%;
    padding-left: 5%;
    display: flex;
  }

  .music-cover-img{
    width: 90%;
    margin: auto;
    -webkit-transform: perspective(400px) rotateY(20deg);
    border-radius: 2px;
    box-shadow:  -7px 13px 20px 1px #666666
  }

  .music-list {
    width: 60%;
    height: 200px;
    float: left;
  }

  .list-title-bar{
    float: left;
    width: 100%;
    padding: 5px;
  }

  .list-row-1{
    width: 100%;
    float: left;
    background: #cccccc;
    padding: 5px;
    font-size: 12px;
  }

  .list-row-2{
    width: 100%;
    float: left;
    padding: 5px;
    font-size: 12px;
  }

  .play-all{
    float: left;
    font-size: 12px;
    color: #434343;
    cursor: pointer;
  }

  .play-all:hover{
    color: rgba(255, 50, 0, 1);
  }


  .all-music{
    float: right;
    font-size: 12px;
    color: #434343;
    cursor: pointer;
  }

  .list-item-no{
    float: left;
    width: 40px;
    color: #3a3a3a;
    text-align: center;
  }

  .list-item-name{
    float: left;
    font-weight: bold;
    color: #3a3a3a;
    width: 40%;
  }

  .list-item-singer{
    float: left;
    color: #3a3a3a;
  }



</style>
