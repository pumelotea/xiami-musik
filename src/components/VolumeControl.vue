<template>
  <div style="display: flex;height: 100%">
    <div style="margin-top: 2px;margin-right: 5px">
      <i class="icon icon-volume-2 pointer padder" v-if="!disabled" @click="disableVolume()"></i>
      <i class="icon icon-volume-off pointer padder" v-if="disabled" @click="enableVolume()"></i>
    </div>
    <div id="volume-slider" class="volume-line" @mousedown.stop="moveVolume($event)" draggable="false">
      <div class="bg-line" draggable="false"></div>
      <div class="bg-line2" :style="'width:'+progress+'%' " draggable="false"></div>
      <div class="volume-slider" :style="'left:'+progress+'%' " draggable="false"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        disabled: false,
        progress: 50,
        lastProgress: 0,
        base: 80.0
      }
    },
    watch: {
      progress(val) {
        if (val === 0) {
          this.disabled = true
        } else {
          this.disabled = false
        }
      }
    },
    methods: {
      disableVolume() {
        this.disabled = true
        this.lastProgress = this.progress
        this.progress = 0
      },
      enableVolume() {
        this.disabled = false
        this.progress = this.lastProgress
      },
      moveVolume(e1) {
        let el = document.getElementById('volume-slider')
        //计算出左侧边距的宽度
        let lw = (document.documentElement.clientWidth - 900) / 2
        if (lw<0){
          lw = 0
        }
        //计算出音量滑条距离屏幕左侧的x值
        lw = el.offsetLeft + lw
        //利用点击事件获取当前元素到屏幕左侧的x，然后简单计算下
        this.progress = (e1.clientX - lw) / 80 * 100


        let that = this
        let old
        document.onmousemove = function (e) {
          if (old) {

            let n = (e.screenX - old.screenX) / 80 * 100
            let v = that.progress + n
            if (v <= 100 && v >= 0) {
              that.progress = v
            }
          }
          old = e
        }
      }
    },
    mounted() {
      document.onmouseup = function () {
        document.onmousemove = null
      }
    }
  }
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }

  .padder {
    padding: 5px;
  }

  .volume-line {
    display: flex;
    position: relative;
    cursor: default;
  }

  .bg-line {
    width: 80px;
    height: 2px;
    background: #cdcdcd;
    margin: auto;
    border-radius: 2px;
  }

  .bg-line2 {
    height: 2px;
    border-radius: 2px;
    background: rgba(255, 50, 0, 0.9);
    position: absolute;
    top: 50%;
    transform: translate3d(0, -50%, 0);
  }

  .volume-slider {
    width: 6px;
    height: 6px;
    background: rgba(255, 50, 0, 0.9);
    position: absolute;
    top: 50%;
    border-radius: 20%;
    transform: translate3d(-50%, -50%, 0) rotate(45deg);

  }
</style>
