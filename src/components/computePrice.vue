<template>
<div class="taxi-price-wraper border-top-1px" >
  <loading v-if="!address.end || !address.start"></loading>
  <div class="taxi-price" v-if=" address.end && address.start ">
        <div class="taxi-normal-price taxi-price-item">
          <div class="taxi-price-title">计价器计价</div>
        </div>
        <div class="taxi-estimate-price taxi-price-item" style="display: block;">
          <div class="taxi-price-title">约
            <span>{{parseInt(Math.random() * 100)}}</span>元</div>
        </div>
  </div>
</div>
</template>
<script>
import loading from '@/components/loading'
import {mapState} from 'vuex'
  export default {
      data () {
          return {
              computePrice:false 
          }
      },
      components:{
          loading
      },
      computed: {
          ...mapState([
              'position',
              'address'
          ])
      }
  }
</script>
<style>
.taxi-price {
    min-height: 53px;
    background-color: #fff;
}
.taxi-price-item {
    padding: 16px 0;
    text-align: center;
    color: #333;
    font-size: 12px;
    line-height: 1;
}
.taxi-price-item.taxi-normal-price .taxi-price-title {
    font-size: 21px;
}
.taxi-price-item {
    padding: 16px 0;
    text-align: center;
    color: #333;
    font-size: 12px;
    line-height: 1;
}
.taxi-price-item.taxi-estimate-price .taxi-price-title>span {
    font-size: 26px;
}
</style>