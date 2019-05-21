<template>
  <div class="top-bar">
    <div class="content">
      <!--操作按钮-->
      <div class="op-btns">
        <span class="op-btn"><i class="icon icon-arrow-left"></i></span>
        <span class="op-btn"><i class="icon icon-arrow-right"></i></span>
        <span class="op-btn"><i class="icon icon-reload"></i></span>
      </div>
      <!--搜索框-->
      <div class="search-wrap">
        <div class="search">
          <div class="search-icon"></div>
          <div style="width: 100%">
            <input class="search-input" placeholder="搜索"/>
          </div>
        </div>
      </div>
      <div class="fun-wrap">
        <div class="smaller-icon"></div>
      </div>
      <div class="fun-wrap">
        <div class="setting-icon"></div>
      </div>

      <div class="fun-wrap">
        <div class="split-line"></div>
      </div>

      <div class="fun-wrap">
        <span class="nickname">矩尹</span>
      </div>

      <div class="fun-wrap">
        <img class="head-img" src="texture/head/head1.jpeg"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .top-bar {
    height: 100%;
    line-height: 74px;
  }

  .content {
    height: 74px;
  }

  .op-btns {
    float: left;
    padding-left: 10px;
    padding-right: 10px;
  }

  .op-btn {
    padding: 12px;
    font-size: 15px;
    color: #878787;
    cursor: pointer;
  }

  .search-wrap {
    float: left;
    height: 74px;
    display: flex
  }

  .search {
    height: 30px;
    width: 220px;
    background: #f2f2f2;
    border-radius: 30px;
    margin: auto;
    padding-left: 20px;
    padding-right: 20px;
    position: relative;
  }

  .search-icon {
    background: url("/texture/icon/search.png");
    background-size: 18px 18px;
    width: 18px;
    height: 18px;
    top: 6px;
    position: absolute;
  }

  .search-input {
    position: absolute;
    left: 50px;
    top: 7px;
    border: none;
    background: transparent;
    outline: 0;
    width: 180px;
    caret-color: rgba(255, 50, 0, 0.9);
    color: #434343;
  }

  .search
  :focus,
  :active,
  :hover {

  }

  .smaller-icon {
    background: url("/texture/icon/small.png");
    width: 18px;
    height: 18px;
    background-size: 18px 18px;
    margin: auto;
    cursor: pointer;
  }

  .setting-icon {
    background: url("/texture/icon/setting.png");
    width: 18px;
    height: 18px;
    background-size: 18px 18px;
    margin: auto;
    cursor: pointer;
  }

  .fun-wrap {
    height: 100%;
    float: right;
    display: flex;
    padding-left: 10px;
    padding-right: 10px
  }

  .split-line {
    width: 1px;
    height: 16px;
    border-left: 1px solid #b8b8b8;
    margin: auto
  }

  .head-img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    margin: auto;
    cursor: pointer;
  }

  .nickname {
    font-size: 14px;
    cursor: pointer;
    color: #4a4a4a;
  }

</style>
