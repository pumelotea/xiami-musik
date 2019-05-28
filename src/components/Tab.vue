<template>
  <div class="tabs">
    <span class="tab-item" :class="{actived:currentTab===0}"><a @click="currentTab=0">推荐</a></span>
    <span class="tab-item" :class="{actived:currentTab===1}"><a @click="currentTab=1">精选</a></span>
    <span class="tab-item" :class="{actived:currentTab===2}"><a @click="currentTab=2">最新</a></span>
    <span class="tab-item" :class="{actived:currentTab===3}"><a @click="currentTab=3">最热</a></span>
    <div class="tab-line" :style="'transform: translateX('+58*currentTab+'px)'"></div>
  </div>
</template>

<script>
  export default {
    name: "Tab",
    props:{
      currentTab: {
        type:Number,
        default:0
      }
    }
  }
</script>

<style scoped>


  .tabs {
    border-bottom: 1px solid #e4e4e4;
    padding-bottom: 5px;
    padding-top: 14px;
    position: relative;
  }
  .tab-item {
    font-size: 14px;
    color: #3c3c3c;
    margin-right: 30px;
    cursor: pointer;
    padding-bottom: 4px;
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
