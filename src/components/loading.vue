<template>
  <div class="mf-part-loading" style="display: blcok;">
    <div class="mf-part-loading-bar" style="display: block;">
      <i class="mf-part-loading-first"></i>
      <i class="mf-part-loading-second"></i>
      <i class="mf-part-loading-three"></i>
    </div>
    <div class="mf-part-loading-err" style="display: none;">数据加载失败，点击重新获取</div>
  </div>
</template>
<script>
</script>
<style>
.mf-part-loading {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-flow: column nowrap;
  flex-flow: column;
  -webkit-box-orient: vertical;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 44px;
  font-size: 12px;
  text-align: center;
  z-index: 2;
  color: #999;
  overflow: hidden;
}

.mf-part-loading-bar {
  width: 100%;
  font-size: 0;
}

.mf-part-loading-bar>i {
  display: inline-block;
  background-color: #eee;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  margin-right: 6px;
  -webkit-animation: mf-part-loading-ani 1.2s step-start infinite;
  animation: mf-part-loading-ani 1.2s step-start infinite;
}

.mf-part-loading-bar .mf-part-loading-second {
  -webkit-animation-delay: .3s;
  animation-delay: .3s;
}

.mf-part-loading-bar .mf-part-loading-three {
  margin-right: 0;
  -webkit-animation-delay: .6s;
  animation-delay: .6s;
}

@-webkit-keyframes mf-part-loading-ani {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  25% {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    background-color: #ccc;
  }
}

@keyframes mf-part-loading-ani {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  25% {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    background-color: #ccc;
  }
}
</style>