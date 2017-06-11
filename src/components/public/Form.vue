<template>
  <div class="taxi-content">
    <tip></tip>
    <div class="taxi-location border-top-1px">
      <div class="location">
        <div class="location-item location-from" @click="show_suggest('getOn')" >
          <p class="location-field border-bottom-1px">{{address.start || position.address || '你要去哪儿'}}</p>
        </div>
        <div class="location-item location-to location-item-inputed" @click="show_suggest('getOff')">
          <p class="location-field">{{address.end || '您去哪儿'}}</p>
        </div>
      </div>
    </div>
    <div class="taxi-rule border-top-1px">
      <i class="mfic-time"></i>
      <icon name="clock-o" scale=0.8></icon>
      <span>现在出发</span>
    </div>
    <compute-price></compute-price>
  </div>
</template>
<script>
import Icon from 'vue-awesome/components/Icon'
import tip from '@/components/tip'
import computePrice from '@/components/computePrice'
import {mapActions,mapState,mapGetters} from 'vuex'
export default {
  computed: {
    ...mapState([
      'position',
      'address'
    ])
  },
  watch: {
    position(oldVal,newVal) {}
  },
  methods: {
      show_suggest(key) {
          this.$store.dispatch('show_suggest',key)
          this.$router.push({path: '/suggest'})
      }
  },
  components:{
    Icon,
    tip,
    computePrice
  }
}
</script>
<style scoped>
.fa-icon {
  vertical-align: middle;
}
.taxi-content {
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.1);
    color: #999;
    background-color: #fff;
    text-align: left;
}
.border-bottom-1px, .border-left-1px, .border-right-1px, .border-top-1px {
    position: relative;
}
.border-bottom-1px:after, .border-bottom-1px:before, .border-left-1px:after, .border-left-1px:before, .border-right-1px:after, .border-right-1px:before, .border-top-1px:after, .border-top-1px:before {
    content: "";
    display: block;
    position: absolute;
    transform-origin: 0 0;
}
.border-top-1px:before {
    border-top: 1px solid #ebebeb;
    left: 0;
    top: 0;
    width: 100%;
}
.location {
    font-size: 16px;
    line-height: 1;
    color: #fc9153;
    background-color: #fff;
}
.location-item {
    position: relative;
    padding-left: 38px;
    padding-right: 16px;
}
.location-item:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 16px;
    width: 6px;
    height: 6px;
    margin-top: -3px;
    border-radius: 50%;
    background-color: #3cbca3;
}
.location-field {
    padding: 17px 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.border-bottom-1px:after {
    border-bottom: 1px solid #ebebeb;
    left: 0;
    bottom: 0;
    width: 100%;
    transform-origin: 0 bottom;
}
.location-item-inputed {
    color: #666;
}
.location-item:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 16px;
    width: 6px;
    height: 6px;
    margin-top: -3px;
    border-radius: 50%;
    background-color: #3cbca3;
}
.location-to:before {
    background-color: #fc9153;
}
.location-field {
    padding: 17px 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}


.taxi-rule {
    position: relative;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #666;
}
.taxi-rule>span {
    vertical-align: middle;
}
</style>