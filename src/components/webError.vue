<template>
  <div class="error-wrapper">
    <div class="error-icon">
      <icon name="exclamation-circle" scale=6 ></icon>
    </div>
    <div class="error-message">
      <p>网络发生错误，请返回继续操作</p>
    </div>
    <div class="back-home">
      <button>
        确认返回
      </button>
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
.error-wrapper{
  padding-top: 25%;
  height: 100%;
}
.error-icon{
  margin-bottom: 20%;
}
.fa-icon{
  fill: rgba(232,232,232,1)
}
.error-message{
  font-size: 22px;
  margin-bottom: 40%;
}
button{
  font-size: 18px;
  background: #4A4C5B;
  border: none;
  width: 90%;
  padding: 10px;
  color: #fff;
  letter-spacing: 2px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}

</style>

