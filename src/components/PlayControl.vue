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
          <div class="play-btn play-round-btn " @click="togglePlay">
            <i class="icon" :class="isPlaying?'icon-control-pause':'icon-control-play'"
               :style="isPlaying?'':'margin-left: 3px'"></i>
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
          <VolumeControl :audio="audio"/>
        </div>
      </div>
    </div>
    <audio id="music-player" src="/music/锦零-空山新雨后.mp3"></audio>
    <div class="progress-bar bg" :style="`width:${progress}px`"></div>
    <div class="play-time" :style="`transform: translateX(${progress}px)`">
      <span>{{currentTime}}</span> /
      <span>{{totalDuration}}</span>
    </div>
  </div>
</template>

<script>
  import VolumeControl from '@/components/VolumeControl'

  export default {
    components: {
      VolumeControl
    },
    data() {
      return {
        base: 900 - 70,
        currentPlayType: 0,
        playType: [
          'loop1', 'loop2', 'random'
        ],
        audio: null,
        isPlaying: false,
        timer: null,
        progress: 0,
        totalDuration: '0:00',
        currentTime: '0:00'
      }
    },
    methods: {
      changePlayType() {
        this.currentPlayType++
      },
      initPlayer() {
        this.audio = document.getElementById('music-player')
      },
      togglePlay() {
        if (this.audio.paused) {
          this.play()
        } else {
          this.pause()
        }
      },
      durationFormat(time) {
        //分钟
        let minute = time / 60;
        let minutes = parseInt(minute);
        // if (minutes < 10) {
        //   minutes = "0" + minutes;
        // }
        //秒
        let second = time % 60;
        let seconds = Math.round(second);
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        return minutes + ':' + seconds
      },
      play() {
        this.isPlaying = true
        this.audio.play()
        this.totalDuration = this.durationFormat(this.audio.duration)
        let lasttime = 0
        this.timer = setInterval(() => {
          if (this.audio.currentTime > lasttime) {
            let v = (this.base * (this.audio.currentTime / this.audio.duration)).toFixed(2)
            this.progress = v
            this.currentTime = this.durationFormat(this.audio.currentTime)
          }
          lasttime = this.audio.currentTime
        }, 50)
      },
      pause() {
        this.isPlaying = false
        this.audio.pause()
        if (this.timer) {
          clearInterval(this.timer)
        }
      }
    },
    mounted() {
      this.initPlayer()
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

  .play-btn:active {
    opacity: 0.8;
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

  .loop1 {
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

  .random {
    background: url("/texture/icon/random.png");
    background-size: 25px 25px;
    width: 25px;
    height: 25px;
  }

  .play-time {
    width: 70px;
    height: 15px;
    background: black;
    position: absolute;
    color: #939393;
    font-size: 10px;
    border-radius: 9px;
    padding: 1px;
    text-align: center;
    opacity: 0.8;
    top: -9px;
    z-index: 20;
    box-shadow: 2px 3px 20px 0px black;
  }

  .progress-bar {
    height: 2px;
    position: absolute;

  }

  .bg{
    background: -webkit-linear-gradient(left, #ffd5d6, #fc4933); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #ffd5d6, #fc4933); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #ffd5d6, #fc4933); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #ffd5d6 , #fc4933); /* 标准的语法 */
  }

</style>
