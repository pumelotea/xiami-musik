<template>
  <div class="tabs">
    <span class="tab-item" :class="{actived:currentTab===0}"><a @click="currentTab=0">热歌</a></span>
    <span class="tab-item" :class="{actived:currentTab===1}"><a @click="currentTab=1">精选</a></span>
    <span class="tab-item" :class="{actived:currentTab===2}"><a @click="currentTab=2">原创</a></span>
    <div class="tab-line" :style="'transform: translateX('+58*currentTab+'px)'"></div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        currentTab:0
      }
    }
  }
</script>

<style scoped>


  .tabs {
    position: relative;
    padding: 5px;
  }
  .tab-item {
    font-size: 14px;
    color: #3c3c3c;
    margin-right: 30px;
    cursor: pointer;
  }

  .tabs .actived {
    color: rgba(255, 50, 0, 1);
    padding-bottom: 4px;
    font-weight: bold;

  }

  .tab-line {
    position: absolute;
    width: 28px;
    height: 2px;
    background: red;
    bottom: 0;
    transition: 0.3s;
  }

  .tab-item:hover {
    color: rgba(255, 50, 0, 1);
    padding-top: 10px;
  }
</style>
