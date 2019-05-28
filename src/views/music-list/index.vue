<template>
  <div class="padder">
    <!--title-->
    <div class="title">全部<a class="show-all" @click="showCategoryPanel= !showCategoryPanel"><i v-if="!showCategoryPanel" class="fa fa-angle-down"></i><i v-if="showCategoryPanel" class="fa fa-angle-up"></i>
      </a>
    </div>
    <CategoryPanel :showCategoryPanel="showCategoryPanel"/>
    <!--content-->
    <div>
      <!--tabs-->
      <Tab :currentTab="currentTab"/>
      <!--list-->
      <div class="list" v-for="i  in 4" :key="i">
        <MusicThumb v-for="i  in 4" />
      </div>
      <Pagination/>
    </div>
  </div>
</template>

<script>
  import Pagination from '@/components/Pagination'
  import CategoryPanel from '@/components/CategoryPanel'
  import Tab from '@/components/Tab'
  import MusicThumb from '@/components/MusicThumb'
  export default {
    components:{
      Pagination,CategoryPanel,Tab,MusicThumb
    },
    data() {
      return {
        currentTab: 0,
        showCategoryPanel:false
      }
    },
    watch:{
      showCategoryPanel(val){
        //切换页面是否可以滚动
        this.$store.state.scroll = !val
      }
    },
    methods: {
      hover() {

      }
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
    font-weight: bold;
    color: #3c3c3c;
  }

  .show-all {
    color: #bababa;
    font-size: 20px;
    line-height: 24px;
    cursor: pointer;
    margin-left: 2px;
  }

  .list {
    position: relative;
    display: flex;
    margin-bottom: 60px;
  }


</style>
