<template>
  <div>
    <div class="menu-title" >音乐库</div>
    <MenuItem :name="'发现音乐'" :iconClass="'icon-music-tone-alt'" @mousedown="current='发现音乐';$router.push('/find-music')" :mactive="current==='发现音乐'"/>
    <MenuItem :name="'歌单'" :iconClass="'icon-playlist'"  @mousedown="current='歌单';$router.push('/music-list')" :mactive="current==='歌单'"/>
    <MenuItem :name="'排行榜'" :iconClass="'icon-bar-chart'"  @mousedown="current='排行榜';$router.push('/billboard')" :mactive="current==='排行榜'"/>
    <div class="menu-title">我的音乐</div>
    <MenuItem :name="'本地歌曲'" :iconClass="'icon-folder-alt'"  @mousedown="current='本地歌曲'" :mactive="current==='本地歌曲'"/>
    <MenuItem :name="'最近播放'" :iconClass="'icon-earphones'"  @mousedown="current='最近播放'" :mactive="current==='最近播放'"/>
    <MenuItem :name="'我的收藏'" :iconClass="'icon-heart'"  @mousedown="current='我的收藏'" :mactive="current==='我的收藏'"/>
    <MenuItem :name="'已购音乐'" :iconClass="'icon-bag'"  @mousedown="current='已购音乐'" :mactive="current==='已购音乐'"/>
    <div class="menu-title">我的歌单</div>
    <MenuItem :name="'新建歌单'" :iconClass="'icon-note'"  @mousedown="current='新建歌单'" :mactive="current==='新建歌单'"/>
    <div class="menu-title">收藏的歌单</div>
  </div>
</template>

<script>
  import MenuItem from '@/components/menu/MenuItem'
  export default {
    components:{
      MenuItem
    },
    data(){
      return {
        current:''
      }
    }
  }
</script>

<style scoped>
  .menu-title{
    font-size: 13px;
    padding-left: 25px;
    color: #919191;
    font-weight: 400;
    margin-bottom: 10px;
    margin-top: 14px;
  }
</style>
