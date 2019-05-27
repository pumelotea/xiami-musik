<template>
  <div class="padder">
    <div class="official-board">1</div>
    <div class="board2">2</div>
    <div class="board3">
      <div class="title">全球媒体榜</div>
      <div class="row">
        <div class="item" v-for="x in 4">
          <div class="img-wrap">
            <img src="texture/music-pic/1542011094295.png"/>
            <div class="music-hover">
              <div class="music-hover-item">
                <div class="play-btn play-round-btn pointer" style="margin: auto">
                  <i style="margin-left: 3px" class="icon icon-control-play "></i>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="item-title">美国Billboard单曲榜</div>
            <div class="item-subtitle">每周五更新</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
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
    height: 400px;
    background: deepskyblue;
  }

  .board3 {
    width: 100%;
    height: 400px;
  }

  .row {
    width: 100%;
    position: relative;
    display: flex;
  }

  .item {
    width: 25%;
    height: 230px;
    border-radius: 5px;
  }

  .item img {
    width: 155px;
    height: 155px;
    border-radius: 5px;
    position: relative;
  }

  .item-title {
    font-size: 14px;
    font-weight: 500;
    margin-top: 12px;
  }

  .item-subtitle {
    font-size: 12px;
    color: gray;
  }

  .pointer {
    cursor: pointer;
  }

  .music-hover {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 13;
    position: absolute;
    border-radius: 5px;
    display: none;
    left: 0;
    top: 0;
  }

  .img-wrap {
    position: relative;
    width: 155px;
    height: 155px;
  }

  .img-wrap:hover .music-hover {
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
