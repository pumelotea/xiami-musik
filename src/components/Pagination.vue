<template>
  <div class="pagination">
    <div style="display: flex;margin: auto">
      <a class="arrow-left-icon pointer" style="margin-right: 20px"></a>
      <a class="page-num pointer actived">1</a>
      <a class="page-num pointer">2</a>
      <a class="page-num pointer">3</a>
      <a class="page-num pointer">4</a>
      <a class="ellipsis-icon pointer"></a>
      <a class="page-num pointer">20</a>
      <a class="arrow-right-icon pointer" style="margin-left: 20px"></a>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Pagination"
  }
</script>

<style scoped>
  .pagination {
    display: flex;
  }

  .pagination .actived {
    color: rgba(255, 50, 0, 1);
    font-weight: 800;
  }

  .page-num {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 14px;
    font-weight: 400;
    position: relative;
    line-height: 18px;
  }

  .page-num:hover {
    color: rgba(255, 50, 0, 1);
  }

  .ellipsis-icon {
    background: url('/texture/icon/ellipsis.png');
    width: 18px;
    height: 18px;
    background-size: 18px 18px;
    float: left;
  }

  .arrow-left-icon {
    background: url('/texture/icon/arrow-left.png');
    width: 18px;
    height: 18px;
    background-size: 18px 18px;
    float: left;
  }

  .arrow-right-icon {
    background: url('/texture/icon/arrow-right.png');
    width: 18px;
    height: 18px;
    background-size: 18px 18px;
    float: left;
  }

  .pointer {
    cursor: pointer;
  }
</style>
