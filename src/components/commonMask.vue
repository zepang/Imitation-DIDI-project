<template>
  <div class="login-popup-mask dark maskShow " style="display: block;">
  </div>
</template>
<script>

</script>
<style scoped>
.login-popup-mask {
  position: fixed;
  z-index: 600;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(37, 38, 45, .4);
  transition: all .2s;
  -webkit-transition: all .2s;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  opacity: 0;
}

.login-popup-mask.dark {
  background-color: rgba(37, 38, 45, .5);
}

.login-popup-mask.maskShow {
  opacity: 1;
}
</style>
