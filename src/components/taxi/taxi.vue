<template>
<div class="taxi-page">
  <v-form></v-form>
  <v-button bgc="#4a4c5b" @click.native="order">呼叫出租车</v-button>
</div>
</template>
<script>
  import vForm from '@/components/Form.vue'
  import vButton from '@/components/Button.vue'
  
  export default {
    components: {
      vForm,
      vButton 
    },
    methods: {
      order () {
        console.log(1)
        this.$router.push({ path: 'order/loader' })
      }
    }
  }
</script>
<style>
.taxi-page {
    position: absolute;
    padding: 10px;
    width: 100%;
    top: 54px;
    bottom: 0;
    box-sizing: border-box;
    overflow: auto;
    font-size: 12px;
}
</style>