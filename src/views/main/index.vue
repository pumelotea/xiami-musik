<template>
  <div class="main-container">
    <!--上半部分-->
    <div class="view-top-container">
      <!--左边菜单-->
      <div class="left-side">
        <!--按钮-->
        <div class="control-btns">
          <div class="dot-btns-wrap">
            <div class="dot-btn-wrap">
              <div class="dot-btn dot-close"></div>
            </div>
            <div class="dot-btn-wrap">
              <div class="dot-btn dot-smaller"></div>
            </div>
            <div class="dot-btn-wrap">
              <div class="dot-btn dot-bigger"></div>
            </div>
          </div>
        </div>
        <Menu></Menu>
      </div>
      <!--右边内容-->
      <div class="right-side">
        <!--顶部菜单-->
        <div class="top-bar">
          <TopBar/>
        </div>
        <!--具体内容容器-->
        <div class="router-view" :class="{'overflow-auto':$store.state.scroll,'overflow-hide':!$store.state.scroll}">
          <router-view/>
        </div>
      </div>
    </div>
    <!--控制条-->
    <div class="view-bottom-container">
      <PlayControl/>
    </div>

  </div>
</template>

<script>
  import Menu from '@/components/menu/Menu'
  import PlayControl from '@/components/PlayControl'
  import TopBar from '@/components/TopBar'
  export default {
    components:{
      Menu,TopBar,PlayControl
    }
  }
</script>

<style scoped>
  .main-container{
    width: 900px;
    height: 650px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%,-50%,0);
    border-radius: 10px;
    box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.2);
  }

  .view-top-container {
    width: 100%;
    height: 580px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .view-bottom-container {
    width: 100%;
    height: 70px;
    -webkit-backdrop-filter: blur(10px);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .left-side{
    width: 180px;
    height: 100%;
    border-top-left-radius: 10px;
    float: left;
    overflow-x: hidden;
    overflow-y: auto;
    background: rgba(228, 230, 229, 0.8);
    -webkit-backdrop-filter: blur(10px);
  }

  .right-side{
    width: 720px;
    height: 100%;
    float: left;
    border-top-right-radius: 10px;
  }

  .top-bar {
    width: 100%;
    height: 74px;
    background: white;
    border-top-right-radius: 10px;
  }

  .router-view{
    width: 100%;
    height: calc(100% - 74px);
    /*background: cornflowerblue;*/
  }

  .overflow-auto{
    overflow: auto;
  }

  .overflow-hide{
    overflow: hidden;
  }

</style>

<style scoped>
  .control-btns{
    height: 34px;
    padding: 10px;
  }

  .dot-btns-wrap {
    height: 20px;
    width: fit-content;
  }

  .dot-btn-wrap {
    padding: 5px;
    float: left;
  }

  .dot-btn {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    z-index: 1;
  }
  .dot-close{
    background: #fc615d;
    border: 0.5px solid #e25755;
  }

  .dot-smaller{
    background: #fdbf41;
    border: 0.5px solid #e9ae3d;
  }

  .dot-bigger{
    background: #34c84a;
    border: 0.5px solid #2cae40;
  }
</style>
