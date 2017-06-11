<template>
  <div class="taxi-send-btn">
    <div class="mf-part-loading" style="display: none;">
      <div class="mf-part-loading-bar" style="transform: scale(1); display: none;">
        <i class="mf-part-loading-first"></i>
        <i class="mf-part-loading-second"></i>
        <i class="mf-part-loading-three"></i>
      </div>
      <div class="mf-part-loading-err" style="display: none;">数据加载失败，点击重新获取</div>
    </div>
    <button type="button" class="mf-btn" :style="{background:bgc}">
      <slot></slot>
      </button>
  </div>
</template>
<script>
export default{
  props: {
    bgc:{
      type: String,
      default: 'rgb(221, 221, 221)'
    }
  }
}
</script>
<style lang="css" scoped>
  .taxi-send-btn {
    margin-top: 10px;
    position: relative;
}
.mf-btn {
    display: block;
    margin: 0;
    padding: 17px 16px;
    width: 100%;
    line-height: 16px;
    border-radius: 2px;
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
    background-image: none;
    white-space: nowrap;
    outline: none;
    font-size: 16px;
    color: #fff;
    border: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}
</style>
