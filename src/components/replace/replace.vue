<template>
<div class="replace-page">
  <v-form></v-form>
  <v-button>呼叫代驾</v-button>
</div>
</template>
<script>
  import vForm from '@/components/public/Form.vue'
  import vButton from '@/components/public/Button.vue'
  
  export default {
    components: {
      vForm,
      vButton 
    }
  }
</script>
<style>
.replace-page {
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