<template>
  <div class="menu-wrap">
    <div class="menu-item">
      <span class="menu-icon">
        <i class="icon" :class="iconClass"></i>
       </span>
      <span>{{name}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        require: false,
        default: '菜单'
      },
      iconClass:{
        type: String,
        require: false,
        default: 'icon-screen-desktop'
      }
    }
  }
</script>

<style scoped>
  .menu-wrap {
    padding: 2px 10px;
    cursor: default;
  }

  .menu-icon{
    color: #a8a8a8;
    padding-left: 6px;
    padding-right: 10px;
  }

  .menu-item {
    color: #535353;
    font-size: 13px;
    text-align: left;
    padding: 6px 8px;
    border-radius: 3px;
  }

  .menu-wrap
  :active,
  :focus
  {
    color: white !important;
    background: rgba(255, 50, 0, 0.9);
  }
</style>
