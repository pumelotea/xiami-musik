<template>
  <div class="play-control">
    <div class="left-item">
      <img class="music-pic" src="texture/music-pic/dlrb.png" draggable="false"/>
    </div>
    <div class="left-item">
      <div style="margin: auto">
        <div class="music-name">舍不得</div>
        <div class="singer">迪丽热巴</div>
      </div>
    </div>
    <div class="left-item">
      <div style="margin: auto">
        <div class="music-type">标准</div>
      </div>
    </div>

    <div class="left-item">
      <div style="margin: auto">
        <i class="icon icon-heart like-icon"></i>
      </div>
    </div>

    <div class="left-item">
      <div style="margin: auto">
        <i class="icon icon-list fun-icon"></i>
      </div>
    </div>

    <div class="center-item">
      <div style="margin: auto">
        <div class="play-icon-wrap">
          <div class="play-btn">
            <i class="icon icon-control-start"></i>
          </div>
        </div>
        <div class="play-icon-wrap">
          <div class="play-btn play-round-btn ">
            <i style="margin-left: 3px" class="icon icon-control-play "></i>
          </div>
        </div>
        <div class="play-icon-wrap">
          <div class="play-btn">
            <i class="icon icon-control-end"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="right-items">
      <div class="right-item">
        <div class="right-fun-icon-wrap">
          <i class="icon icon-playlist pointer"></i>
        </div>
      </div>

      <div class="right-item">
        <div class="right-fun-icon-wrap">
          <i class="icon icon-screen-desktop pointer"></i>
        </div>
      </div>

      <div class="right-item">
        <div class="right-fun-icon-wrap">
          <i class="icon icon-equalizer pointer"></i>
        </div>
      </div>
      <div class="right-item">
        <div class="right-fun-icon-wrap">
          <div class="pointer" :class="playType[currentPlayType%playType.length]" @click="changePlayType"></div>
        </div>
      </div>

      <div class="right-item">
        <div class="right-fun-icon-wrap">
          <VolumeControl/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VolumeControl from '@/components/VolumeControl'
  export default {
    components:{
      VolumeControl
    },
    data(){
      return {
        currentPlayType:0,
        playType:[
          'loop1','loop2','random'
        ]
      }
    },
    methods:{
      changePlayType(){
        this.currentPlayType ++

      }
    }
  }
</script>

<style scoped>
  .play-control {
    background: rgba(252, 252, 252, 0.7);
    height: 100%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    position: relative;
  }

  .left-item {
    height: 100%;
    float: left;
    display: flex;
  }

  .right-item {
    height: 100%;
    float: right;
    display: flex;
  }

  .right-items {
    float: right;
    height: 100%;
    padding-right: 10px
  }

  .center-item {
    height: 100%;
    width: 200px;
    position: absolute;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    text-align: center;
    display: flex;
  }

  .music-pic {
    height: 100%;
    border-bottom-left-radius: 10px;
    cursor: pointer;
  }

  .music-name {
    font-size: 14px;
    color: #727272;
    padding-left: 10px;
    cursor: pointer;
  }

  .music-name:hover {
    color: rgba(255, 50, 0, 0.9);
  }

  .singer {
    font-size: 12px;
    color: #a3a3a3;
    padding-left: 10px;
    cursor: pointer;
  }

  .singer:hover {
    color: rgba(255, 50, 0, 0.9);
  }

  .music-type {
    font-size: 8px;
    color: #535353;
    margin-left: 20px;
    padding-left: 4px;
    padding-right: 4px;
    border: 1px solid #737373;
    border-radius: 2px;
    cursor: pointer;
  }

  .music-type:hover {
    color: rgba(255, 50, 0, 0.9);
    border: 1px solid rgba(255, 50, 0, 0.9);
  }

  .like-icon {
    margin-left: 20px;
    cursor: pointer
  }

  .fun-icon {
    margin-left: 20px;
    cursor: pointer
  }

  .play-icon-wrap {
    float: left;
    padding: 5px;
  }

  .play-btn {
    padding: 10px;
    cursor: pointer;
  }

  .play-round-btn {
    border-radius: 50%;
    background: rgba(255, 50, 0, 0.9);
    width: 20px;
    height: 20px;
    text-align: center;
    color: white;
    font-weight: bold;
  }

  .right-fun-icon-wrap {
    margin: auto;
    padding: 0 10px;
    font-size: 14px;
  }

  .pointer {
    cursor: pointer;
  }

  .loop1{
    background: url("/texture/icon/loop1.png");
    background-size: 25px 25px;
    width: 25px;
    height: 25px;
  }

  .loop2 {
    background: url("/texture/icon/loop2.png");
    background-size: 25px 25px;
    width: 25px;
    height: 25px;
  }

  .random{
    background: url("/texture/icon/random.png");
    background-size: 25px 25px;
    width: 25px;
    height: 25px;
  }

</style>
