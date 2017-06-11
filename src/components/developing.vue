<template>
  <div class="developing-wrap">
    <div class="developing-icon">
      <icon name="cog" class="fa-spin fa-pulse" scale=6 ></icon>
      <div class="small">
        <icon name="cog" class="fa-spin fa-pulse" scale=3 ></icon>
      </div>
    </div>
    <div class="developing-msg">
      <p>正在努力开发中...</p>
    </div>
  </div>
</template>
<script>
import Icon from 'vue-awesome/components/Icon'
export default {
  components: {
    Icon
  }
}
</script>
<style scoped>
.developing-wrap{
  height: 100%;
  padding-top: 25%;
  background-color: #f3f4f5;
}
.developing-icon{
  margin-bottom: 50%;
}
.developing-icon .small{
  position: absolute;
  top: 160px;
  left: 207px;
}
.fa-icon{
  animation: fa-spin 2s 0s infinite linear;
}
.developing-msg{
  color: #FC9153;
  font-size: 18px;
}
</style>

