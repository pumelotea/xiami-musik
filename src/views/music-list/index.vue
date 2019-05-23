<template>
  <div class="padder">
    <!--title-->
    <div class="title">全部<a class="show-all"><i class="fa fa-angle-down"></i></a>
    </div>
    <!--content-->
    <div>
      <!--tabs-->
      <div class="tabs" style="margin-bottom: 30px">
        <span class="tab-item" :class="{actived:currentTab===0}"><a @click="currentTab=0">推荐</a></span>
        <span class="tab-item" :class="{actived:currentTab===1}"><a @click="currentTab=1">精选</a></span>
        <span class="tab-item" :class="{actived:currentTab===2}"><a @click="currentTab=2">最新</a></span>
        <span class="tab-item" :class="{actived:currentTab===3}"><a @click="currentTab=3">最热</a></span>
        <div class="tab-line" :style="'transform: translateX('+58*currentTab+'px)'"></div>
      </div>
      <!--list-->
      <div class="list">
        <div class="list-item">
          <div class="music-thumb-padder">
            <img class="music-thumb" src="/texture/music-pic/1.jpg"/>
            <div class="music-thumb-d1"></div>
            <div class="music-thumb-d2"></div>
          </div>
          <div class="music-list-title">无可奈何花落去</div>
          <div class="music-list-auth">矩尹</div>

        </div>
        <div class="list-item">
          <div class="music-thumb-padder">
            <img class="music-thumb" src="/texture/music-pic/2.jpg"/>
            <div class="music-thumb-d1"></div>
            <div class="music-thumb-d2"></div>
          </div>
          <div class="music-list-title">无可奈何花落去</div>
          <div class="music-list-auth">矩尹</div>
        </div>
        <div class="list-item">
          <div class="music-thumb-padder">
            <img class="music-thumb" src="/texture/music-pic/3.jpg"/>
            <div class="music-thumb-d1"></div>
            <div class="music-thumb-d2"></div>
          </div>
          <div class="music-list-title">无可奈何花落去</div>
          <div class="music-list-auth">矩尹</div>
        </div>
        <div class="list-item">
          <div class="music-thumb-padder">
            <img class="music-thumb" src="/texture/music-pic/4.jpg"/>
            <div class="music-thumb-d1"></div>
            <div class="music-thumb-d2"></div>
          </div>
          <div class="music-list-title">无可奈何花落去</div>
          <div class="music-list-auth">矩尹</div>
        </div>
      </div>
      <div class="list">
        <div class="list-item">
          <div class="music-thumb-padder">
            <img class="music-thumb" src="/texture/music-pic/1.jpg"/>
            <div class="music-thumb-d1"></div>
            <div class="music-thumb-d2"></div>
          </div>
          <div class="music-list-title">无可奈何花落去</div>
          <div class="music-list-auth">矩尹</div>
        </div>
        <div class="list-item">
          <div class="music-thumb-padder">
            <img class="music-thumb" src="/texture/music-pic/2.jpg"/>
            <div class="music-thumb-d1"></div>
            <div class="music-thumb-d2"></div>
          </div>
          <div class="music-list-title">无可奈何花落去</div>
          <div class="music-list-auth">矩尹</div>
        </div>
        <div class="list-item">
          <div class="music-thumb-padder">
            <img class="music-thumb" src="/texture/music-pic/3.jpg"/>
            <div class="music-thumb-d1"></div>
            <div class="music-thumb-d2"></div>
          </div>
          <div class="music-list-title">无可奈何花落去</div>
          <div class="music-list-auth">矩尹</div>
        </div>
        <div class="list-item">
          <div class="music-thumb-padder">
            <img class="music-thumb" src="/texture/music-pic/4.jpg"/>
            <div class="music-thumb-d1"></div>
            <div class="music-thumb-d2"></div>
          </div>
          <div class="music-list-title">无可奈何花落去</div>
          <div class="music-list-auth">矩尹</div>
        </div>
      </div>
      <div class="list">
        <div class="list-item">
          <div class="music-thumb-padder">
            <img class="music-thumb" src="/texture/music-pic/1.jpg"/>
            <div class="music-thumb-d1"></div>
            <div class="music-thumb-d2"></div>
          </div>
          <div class="music-list-title">无可奈何花落去</div>
          <div class="music-list-auth">矩尹</div>
        </div>
        <div class="list-item">
          <div class="music-thumb-padder">
            <img class="music-thumb" src="/texture/music-pic/2.jpg"/>
            <div class="music-thumb-d1"></div>
            <div class="music-thumb-d2"></div>
          </div>
          <div class="music-list-title">无可奈何花落去</div>
          <div class="music-list-auth">矩尹</div>
        </div>
        <div class="list-item">
          <div class="music-thumb-padder">
            <img class="music-thumb" src="/texture/music-pic/3.jpg"/>
            <div class="music-thumb-d1"></div>
            <div class="music-thumb-d2"></div>
          </div>
          <div class="music-list-title">无可奈何花落去</div>
          <div class="music-list-auth">矩尹</div>
        </div>
        <div class="list-item">
          <div class="music-thumb-padder">
            <img class="music-thumb" src="/texture/music-pic/4.jpg"/>
            <div class="music-thumb-d1"></div>
            <div class="music-thumb-d2"></div>
          </div>
          <div class="music-list-title">无可奈何花落去</div>
          <div class="music-list-auth">矩尹</div>
        </div>
      </div>
      <div class="pagination">
        <div style="display: flex;margin: auto">
          <a class="arrow-left-icon pointer" style="margin-right: 20px"></a>
          <a class="page-num pointer actived">1</a>
          <a class="page-num pointer">2</a>
          <a class="page-num pointer">3</a>
          <a class="page-num pointer">4</a>
          <a class="ellipsis-icon pointer"></a>
          <a class="page-num pointer">20</a>
          <a class="arrow-right-icon pointer" style="margin-left: 20px"></a>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentTab: 0,
      }
    }
  }
</script>

<style scoped>
  .padder {
    padding: 30px;
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

  .tab-item :hover {
    color: rgba(255, 50, 0, 1);
    padding-top: 10px;
  }

  .list {
    position: relative;
    display: flex;
    margin-bottom: 60px;
  }

  .list-item {
    width: 160px;
    height: 160px;
    margin: auto;
  }

  .music-thumb {
    width: 141px;
    height: 141px;
    border-radius: 2px;
    z-index: 11;
    position: absolute;
    margin: auto;
    top: 50%;
    transform: translateY(-50%);
    border: 1px solid #eeeeee;

  }

  .music-thumb-padder {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .music-thumb-d1 {
    width: 73%;
    height: 73%;
    background: #d6d6d6;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    z-index: 10;
    border-radius: 3px;
    border: 1px solid #e8e8e8;
  }

  .music-thumb-d2 {
    width: 60%;
    height: 60%;
    background: #ededed;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 5px;
    z-index: 9;
    border-radius: 3px;
    border: 1px solid #e8e8e8;
  }

  .music-list-title{
    font-size: 14px;
    font-weight: bold;
    color: #414141;
  }

  .music-list-auth{
    font-size: 10px;
    color: #a7a7a7;
    font-weight: 500;
  }

  .pagination{
    display: flex;
  }

  .pagination .actived{
    color: rgba(255, 50, 0, 1);
    font-weight: 800;
  }

  .page-num{
    padding-left: 10px;
    padding-right: 10px;
    font-size: 14px;
    font-weight: 400;
    position: relative;
    line-height: 18px;
  }

  .page-num:hover{
    color: rgba(255, 50, 0, 1);
  }

  .ellipsis-icon{
    background: url('/texture/icon/ellipsis.png');
    width: 18px;
    height: 18px;
    background-size: 18px 18px;
    float:left;
  }

  .arrow-left-icon{
    background: url('/texture/icon/arrow-left.png');
    width: 18px;
    height: 18px;
    background-size: 18px 18px;
    float:left;
  }

  .arrow-right-icon{
    background: url('/texture/icon/arrow-right.png');
    width: 18px;
    height: 18px;
    background-size: 18px 18px;
    float:left;
  }

  .pointer{
    cursor: pointer;
  }

</style>
