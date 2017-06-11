<template>
  <div class="taxi-wait-content">
    <div class="top-car-region">
      <div class="driver-card-wraper border-bottom-1px">
        <div class="driver-card-content">
          <div class="driver-card-avatar">
            <img src="//taxife.didistatic.com/static/fe/default_driver_avator_v5.png">
          </div>
          <div class="driver-card-call">
            <a href="tel:138*****818" class="driver-card-phone">
              <div>
                <Icon name="phone" scale=1.2></Icon>
              </div>
  
            </a>
          </div>
          <div class="driver-card-info">
            <div class="driver-card-name-star-num">
              <span class="driver-card-name">杜师傅</span>
            </div>
            <div class="driver-card-licence-special">
              <div class="driver-card-licence">赣A8X***</div>
            </div>
            <div class="driver-card-cartype">****交通有限责任公司</div>
          </div>
        </div>
      </div>
    </div>
    <div class="amap">
      <amap></amap>
    </div>
    <div class="mf-bottom-bar">
      <div class="mf-bottombar-mod">
        
        <ul class="mf-bottombar-bd">
          <li data-index="0" @click="cancle_order">
            <button type="button" >
              <span>取消订单</span>
            </button>
          </li>
          <li data-index="1" >
            <button type="button" @click="web_error">
              <span>需要帮助</span>
            </button>
          </li>
          <li class="">
            <button type="" >
              <div class="icon-ellipsis-h">
                <icon name="ellipsis-h"></icon>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Icon from 'vue-awesome/components/Icon'
import amap from '@/components/public/amap.vue'
import {mapActions} from "vuex"
export default {
  methods: {
    cancle_order() {
      this.$router.push({path:'/'})
    },
    web_error() {
      this.$router.push({path: '/webError'})
    }
  },
  components: {
    Icon,
    amap
  }
}
</script>
<style scoped>
.taxi-wait-content {
  height: 100%;
}
button{
  outline: none;
}
.amap {
  height: 800px;
  margin-top: -102px;
}

.top-car-region {
  position: relative;
  top: 0;
  z-index: 999;
  margin: 10px 5% 0px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, .12);
}

.driver-card-wraper {

  /*border: 1px solid #000;*/
  border-radius: 2px;
  background-color: #fff;
  line-height: 1;
}

.driver-card-content {
  padding: 16px;
  height: 60px;
}

.driver-card-avatar {
  position: relative;
  float: left;
  width: 60px;
  height: 100%;
  margin-right: 10px;
  border-radius: 50%;
  background-color: #f9f9f9;
}

.driver-card-avatar>img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.driver-card-call {
  height: 100%;
  float: right;
  line-height: 60px;
  font-size: 0;
}

.driver-card-call>a {
  position: relative;
  font-size: 20px;
  color: #666;
  text-decoration: none;
  display: inline-block;
  height: 36px;
  width: 36px;
  border: 1px solid rgba(0, 0, 0, .4);
  line-height: 32px;
  vertical-align: middle;
  text-align: center;
  border-radius: 50%;
  margin-left: 12px;
}

.driver-card-call a>div {
  margin-top: 2px;
  margin-left: 5px;
}

.fa-icon {
  fill: rgba(0, 0, 0, .4);
}

.driver-card-info {
  text-align: left;
  font-size: 12px;
}

.driver-card-info>div {
  padding: 4px 0;
}

.driver-card-name {
  font-size: 16px;
  color: #333;
}

.mf-bottom-bar {
  position: absolute;
  z-index: 999;
  top:110px;
  width: 100%;
}

.mf-bottombar-mod {
  margin: 0 auto;
  width: 90%;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, .12);
}

.mf-bottombar-bd {
  background: #fff;
  display: flex;
  justify-content: space-around;
}
.mf-bottombar-bd li{
  display: inline-block;
  padding: 0 20px;
}
.mf-bottombar-bd li button {
  background: #fff;
  border: none;
}

.mf-bottombar-bd li button>span {
  display: inline-block;
  padding: 10px 0;
}
.mf-bottombar-bd li button .icon-ellipsis-h{
  margin-top: 10px;
}
</style>