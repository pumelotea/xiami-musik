<template>
  <div style="display: flex;height: 100%">
    <div style="margin-top: 2px;margin-right: 5px">
      <i class="icon icon-volume-2 pointer padder" v-if="!disabled" @click="disableVolume()"></i>
      <i class="icon icon-volume-off pointer padder" v-if="disabled" @click="enableVolume()"></i>
    </div>
    <div class="volume-line" @click.stop="setVolume($event)" draggable="false">
      <div class="bg-line" draggable="false"></div>
      <div  class="bg-line2" :style="'width:'+progress+'%' " draggable="false"></div>
      <div id="volume-slider"  class="volume-slider"  :style="'left:'+progress+'%' " @click.stop="" draggable="false"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        disabled: false,
        progress: 0,
        lastProgress:0,
        base:80.0
      }
    },
    watch:{
      progress(val){
        if (val === 0){
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
      setVolume(e) {
        this.progress =e.offsetX / this.base * 100
      },
    },
    mounted(){
      let that= this
      let el = document.getElementById('volume-slider')

      document.onmouseup = function () {
        console.log("release")
        document.onmousemove = null
      }

      el.onmousedown=function (e1) {
          let old
          document.onmousemove=function (e) {
            if (old){
              let n = (e.screenX-old.screenX)/80*100
              let v = that.progress + n
              if (v <= 100 & v>=0){
                that.progress = v
              }
              console.log(that.progress)

            }
            old = e
          }
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
    border-radius: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
</style>
