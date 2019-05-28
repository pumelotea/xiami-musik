<template>
  <transition name="fade" enter-active-class="animated  slideInLeft"
              leave-active-class="animated slideOutLeft">
    <div class="category " v-if="showCategoryPanel">
      <div class="lb-row">
        <div>
          <div class="category-btn-wrap">
            <a class="category-btn">全部</a>
          </div>
        </div>
      </div>
      <div class="lb-row">
        <div class="lb-title">推荐</div>
        <div>
          <div class="category-btn-wrap">
            <a class="category-btn active">经典</a>
          </div>
          <div class="category-btn-wrap">
            <a class="category-btn">抖音</a>
          </div>
          <div class="category-btn-wrap">
            <a class="category-btn">节奏</a>
          </div>
          <div class="category-btn-wrap">
            <a class="category-btn">影视</a>
          </div>
        </div>
      </div>
      <div class="lb-row">
        <div class="lb-title">语种</div>
        <div>
          <div class="category-btn-wrap" v-for="i in 9">
            <a class="category-btn">影视</a>
          </div>
        </div>
      </div>
      <div class="lb-row">
        <div class="lb-title">风格</div>
        <div>
          <div class="category-btn-wrap">
            <a class="category-btn">经典</a>
          </div>
          <div class="category-btn-wrap" v-for="i in 20">
            <a class="category-btn">抖音</a>
          </div>
        </div>
      </div>
      <div class="lb-row">
        <div class="lb-title">主题</div>
        <div>
          <div class="category-btn-wrap" v-for="i in 10">
            <a class="category-btn">经典</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props:{
      showCategoryPanel:{
        type:Boolean,
        require:true,
        default:true
      }
    }
  }
</script>

<style scoped>
  .category{
    width:  680px;
    height: 450px;
    background: white;
    position: absolute;
    z-index: 13;
    overflow: auto;
  }

  .lb-title{
    font-size: 15px;
    font-weight: 500;
    color: #4a4a4a;
    margin-bottom: 10px;
  }

  .lb-row{
    border-bottom: 1px solid #eeeeee;
    padding: 20px 0;
    width: 100%;
    float: left;
  }

  .category-btn-wrap{
    padding:10px 0;
    width: auto;
    float: left;
    position: relative;
  }

  .category-btn{
    font-size: 12px;
    padding: 5px 15px;
    border-radius: 15px;
    margin-right: 10px;
    background: #f2f2f2;
    cursor: pointer;

  }


  .category-btn-wrap .active{
    background: rgba(255, 50, 0, 1);
    color: white;
  }

</style>
