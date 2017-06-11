<template>
  <div class="bus-page">
    <search></search>
    <bus-item></bus-item>
  </div>
</template>

<script>
import search from './search.vue'
import busItem from './busItem.vue'
  export default {
    components: {
      search,
      busItem
    }
  }
</script>
<style>
.bus-page {
    position: absolute;
    overflow: auto;
    top: 54px;
    bottom: 0;
    width: 100%;
    padding-top: 10px;
    box-sizing: border-box;
    text-align: left;
}
</style>