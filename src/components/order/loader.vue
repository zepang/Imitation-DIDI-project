<template>
<transition enter-active-class="animated slideInUp"  leave-class="animated fadeOutRight">
  <div class="call-wrapper">
    <div class="call-tips">
      <p class="title">正在为您叫车</p>
      <p class="tip">{{tips}}秒后无应答将为您优先叫车</p>
    </div>
    <div class="state">
      <div class="loader">
        <svg width="240" height="240" xmlns="http://www.w3.org/2000/svg">
          <circle r="90" cy="120" cx="120" stroke-width="3" opacity="0.2" stroke="#333" fill="none" />
          <circle class="circle-one" id="backdrop" r="90" cy="120" cx="120" stroke-width="3" stroke-linecap="round" stroke="rgb(252,145,83)" fill="none" />
        </svg>
        <div class="circle-wapper">
          <div class="circle-demo">
            <span>00:{{tips}}</span>
          </div>
        </div>
        <div class="loader-tip">
          <p>已通知出租车</p>
          <span class="notice-car">{{taxiCount}}</span>
          辆
        </div>
      </div>
    </div>
    <div class="bottom">
      <div>
        <button class="cancle" @click="back">
          <span>取消订单</span>
        </button>
        <button class="cancle">
          <span>打标来接</span>
        </button>
        <button class="cancle">
          <span>调度费</span>
        </button>
      </div>
    </div>
  </div>
</transition>
</template>
<script>
import {mapState} from 'vuex'
  export default{
    data () {
      return{
        taxiCount: 0
      }
    },
    computed: {
      ...mapState([
        'tips'
      ])
    },
    methods: {
      back () {
        console.log(this.$router)
        this.$router.go(-1)
      }
    },
    watch: {
      tips (value) {
        if(value % 2 == 0){
          this.taxiCount++
        }
        if(value < 20){
          this.$router.push({path:'/order/accepte'})
        }
      }
    },
    mounted() {
      this.$store.dispatch('time', 30)
    }
  }
</script>

<style>
.call-wrapper {
  width: 100%;
  padding-top: 150px;
  animation-duration: .5s;
}
.call-tips {
  height: 60px;
  /*line-height: 60px;*/
}
.call-tips .title {
  font-size: 20px;
}

.loader {
  position: relative;
}

.loader-tip {
  width: 100%;
  position: absolute;
  top: 88px;
  color: #FC9153;
}

.loader-tip>p {
  color: #6C6C6C;
}

.loader-tip .notice-car {
  font-size: 30px;
}

.circle-wapper {
  width: 110px;
  height: 40px;
  position: absolute;
  top: 98px;
  left: 50%;
  transform: translateY(-20px);
  transform-origin: 0 50%;
  transform: rotate(-90deg);
  animation: circleRoate infinite linear 30s;
  z-index: 99;
}

.circle-wapper .circle-demo span {
  font-size: 12px;
  color: #fff;
  line-height: 40px;
}

@keyframes circleRoate {
  to {
    transform: rotate(270deg)
  }
}

.circle-one {
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke-dasharray: 566px;
  stroke-dashoffset: 566px;
  animation: progressAnimation 30s linear infinite;
}

@keyframes progressAnimation {
  to {
    stroke-dashoffset: 0px;
  }
}

.circle-demo {
  width: 40px;
  height: 40px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  background-color: #FC9153;
  position: absolute;
  right: 0;
}

.call-wrapper .bottom {
  width: 100%;
  /*padding: 0 20px;*/
  position: absolute;
  bottom: 40px;
}
.call-wrapper .bottom>div{
  width: 80%;
  margin-left: 10%;
  box-shadow: 1px 1px 10px #ccc;
  display: flex;
  justify-content: space-around;
}
.call-wrapper .bottom button {
  background: #fff;
  border: none;
  padding: 10px 10px;
}

</style>
