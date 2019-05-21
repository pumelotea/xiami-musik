<template>
  <div>
    <div class="menu-title">音乐库</div>
    <MenuItem :name="'发现音乐'" :iconClass="'icon-music-tone-alt'"/>
    <MenuItem :name="'歌单'" :iconClass="'icon-playlist'"/>
    <MenuItem :name="'排行榜'" :iconClass="'icon-bar-chart'"/>
    <div class="menu-title">我的音乐</div>
    <MenuItem :name="'本地歌曲'" :iconClass="'icon-folder-alt'"/>
    <MenuItem :name="'最近播放'" :iconClass="'icon-earphones'"/>
    <MenuItem :name="'我的收藏'" :iconClass="'icon-heart'"/>
    <MenuItem :name="'已购音乐'" :iconClass="'icon-bag'"/>
    <div class="menu-title">我的歌单</div>
    <MenuItem :name="'新建歌单'" :iconClass="'icon-note'"/>
    <div class="menu-title">收藏的歌单</div>
  </div>
</template>

<script>
  import MenuItem from '@/components/menu/MenuItem'
  export default {
    components:{
      MenuItem
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
