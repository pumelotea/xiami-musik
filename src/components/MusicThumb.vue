<template>
  <div class="item">
    <div class="music-thumb-padder">
      <div class="music-thumb-wrap">
        <img class="music-thumb" src="/texture/music-pic/1.jpg"/>
        <div class="music-hover">
          <div class="music-hover-item">
            <a class="pointer" style="margin: auto">
              <i class="icon icon-heart"></i>
            </a>
          </div>
          <div class="music-hover-item">
            <div class="play-btn play-round-btn pointer" style="margin: auto">
              <i style="margin-left: 3px" class="icon icon-control-play "></i>
            </div>
          </div>
          <div class="music-hover-item">
            <a class="ellipsis-icon2 pointer" style="margin: auto"></a>
          </div>
        </div>
      </div>
      <div class="music-thumb-d1"></div>
      <div class="music-thumb-d2"></div>
      <div class="music-play-count">
        <i class="fa fa-caret-right"></i>
        1000万
      </div>
    </div>
    <div class="music-list-title">无可奈何花落去</div>
    <div class="music-list-auth">矩尹</div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

  .item {
    width: 160px;
    height: 160px;
    margin: auto;
  }

  .music-thumb {
    width: 141px;
    height: 141px;
    border-radius: 3px;
    z-index: 12;
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

  .music-list-title {
    font-size: 14px;
    font-weight: bold;
    color: #414141;
    cursor: pointer;
  }

  .music-list-auth {
    font-size: 10px;
    color: #a7a7a7;
    font-weight: 500;
  }

  .music-play-count {
    font-size: 10px;
    color: white;
    font-weight: 500;
    position: absolute;
    top: 15px;
    z-index: 12;
    right: 20px;
    background: url("/texture/qipao.png");
    background-size: 100% 100%;
    padding-left: 8px;
    padding-right: 8px;
    text-align: center;
  }


  .pointer {
    cursor: pointer;
  }

  .music-hover {
    width: 141px;
    height: 141px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 13;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 3px;
    border: 1px solid #e8e8e8;
    display: none;
  }

  .music-thumb-wrap{
    height: fit-content;
    width: fit-content;
  }


  .music-thumb-wrap:hover .music-hover{
    display: flex;
  }


  .music-hover-item {
    margin: auto;
    color: white;
    width: 30%;
    text-align: center;
    display: flex;
  }


  .play-round-btn {
    border-radius: 50%;
    background: rgba(255, 50, 0, 0.9);
    width: 20px;
    height: 20px;
    padding: 8px;
    text-align: center;
    color: white;
    font-weight: bold;
  }


  .ellipsis-icon2 {
    background: url('/texture/icon/ellipsis.png');
    width: 18px;
    height: 18px;
    background-size: 18px 18px;
    float: left;
  }


</style>
