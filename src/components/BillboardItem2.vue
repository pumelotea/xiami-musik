<template>
  <div class="billboard-thumb">
    <div class="fix-title">虾米分享榜 <i class="fa fa-angle-right"></i>&nbsp;</div>
    <div class="left-side">
      <div class="music-thumb-wrap" style="float: left">
        <img class="music-thumb" src="/texture/music-pic/3.jpg"/>
        <div class="music-hover">
          <div class="music-hover-item">
            <div class="play-btn play-round-btn pointer" style="margin: auto">
              <i style="margin-left:3px" class="icon icon-control-play "></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-side">
      <div class="top-music" v-for="i in 3">
        <div class="no">{{i}}</div>
        <div class="title">光年之外</div>
        <div class="split"> - </div>
        <div class="singer">邓紫棋</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>
<style scoped>
  .billboard-thumb {
    width: 100%;
    background: #eeeeee;
    float: left;
    height: 100px;
    border-radius: 2px;
    position: relative;
  }

  .fix-title{
    position: absolute;
    background: black;
    color: white;
    top: -5px;
    left: -5px;
    z-index: 14;
  }

  .left-side {
    float: left;
  }

  .right-side {
    float: left;
    padding: 20px 10px 10px;
  }

  .no{
    font-size: 13px;
    font-weight: bold;
    color: #919191;
    width: 20px;
    text-align: center;
    float: left;

  }

  .title{
    font-size: 12px;
    font-weight: bold;
    color: #4a4a4a;
    float: left;
  }

  .split{
    font-size: 12px;
    color: #b1b1b1;
    float: left;
    padding: 0 4px;
  }

  .singer{
    font-size: 12px;
    color: #b1b1b1;
    font-weight: 400;
    float: left;
  }

  .top-music{
    line-height: 24px;
  }
</style>
<style scoped>


  .music-thumb {
    width: 100px;
    height: 100px;
    border-radius: 3px;
    z-index: 12;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .pointer {
    cursor: pointer;
  }

  .music-hover {
    width: 100px;
    height: 100px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 13;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 3px;
    display: none;
  }

  .music-thumb-wrap {
    height: 100px;
    width: 100px;
  }

  .music-thumb-wrap:hover .music-hover {
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


</style>
