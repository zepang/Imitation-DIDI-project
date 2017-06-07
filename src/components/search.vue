<template>
  <div class="gj-home-header">
    <div data-log="{&quot;e&quot; : &quot;gale_p_t_areal_sech_ck&quot;}" class="gj-home-searchbox">
      <icon name="search" scale="1.2" ></icon>
      <p class="gj-home-searchbox-text">搜目的地、查公交</p>
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
<style>
.gj-home-header {
    position: relative;
    z-index: 2;
}
.gj-home-header .gj-home-searchbox {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 49px;
    font-size: 16px;
    line-height: 50px;
    vertical-align: middle;
    color: #fc9153;
    margin: 0 10px;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.1);
    background: #fff;
    padding: 0 10px;
}
.gj-home-header .gj-home-searchbox .gj-home-searchbox-text {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 0 10px;
}
.fa-icon{
  font-weight: bold;
}
</style>