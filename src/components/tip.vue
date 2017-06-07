<template>
  <div class="taxi-eta" style="display: blcok;">
      <loading v-show="position.address? false:true"></loading>
      <span style="display: block;">“
        <span>附近有11辆出租车</span> ”</span>
    </div>
</template>
<script>
  import loading from '@/components/loading'
  import {mapState} from 'vuex'
  export default {
      computed: {
        ...mapState([
            'position'
        ])  
      },
      components:{
          loading
      }
  }
</script>

<style scoped>
  .taxi-eta {
    font-size: 14px;
    height: 44px;
    line-height: 44px;
    text-align: center;
}
</style>