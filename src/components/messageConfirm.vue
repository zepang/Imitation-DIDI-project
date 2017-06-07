<template>
  <div class="login-popup showPopup" style="display: block; top: 212px;">
    <div class="pop-slogin ">
      <div class="title">输入验证码</div>
      <div class="back back-hook">
        <span></span>
      </div>
      <div class="error error-hook"></div>
      <div class="phone-wrapper">
        <div class="phone">验证码将发送至 {{telephone}}</div>
        <div class="btn btn-hook active" v-show="timeCount" >{{tipsContent}}</div>
        <div class="btn btn-hook active" @click="time" v-show="!timeCount" >重新发送</div>
      </div>
      <div class="user-input user-input-hook">
        <!--<span :class="{'active': item.isActive}" v-for="(item,index) in Verification " @click="active_input(index)" >{{Verification[index].VerificationNum}}</span>-->
        <span :class="{'active': item.isActive}" v-for="(item,index) in Verification " @click="active_input(index)" >{{VerificationNumArray[index]}}</span>
        <!--<span></span>
        <span></span>
        <span></span>-->
      </div>
      <div class="desc desc-hook">输入验证码表示同意《法律声明及隐私政策》</div>
      <div class="hidden-input">
        <input class="hidden-input-hook" type="tel" maxlength="4"> </div>
    </div>
    <div class="close" @click="close_mask">
      <span></span>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      
    }
  },
  computed: {
    ...mapState([
      'telephone',
      'tipsContent',
      'Verification',
      'VerificationNumArray',
      'timeCount',
      'save_telephone'
    ])
  },
  watch: {
    tipsContent(value) {
      console.log(value)
    },
    VerificationNumArray(value) {
      console.log(value)

      if(this.VerificationNumArray.length === 4) {
        //执行保存 手机至本地 && 路由跳转
        console.log(44)
        this.$store.dispatch('save_telephone')
        this.close_mask()
      }
    }
  },
  methods: {
    time(){
      console.log('time')
      this.$store.dispatch('time',60)
    },
    active_input(index){
    return this.$store.dispatch('active_input',index)
    },
    ...mapActions([
      'close_mask',
      'key_down_input',
      'remove_key_down_input'
    ]),  
  },
  // 挂载添加倒计时和键盘监听
  mounted () {
    this.time(),
    this.key_down_input()
  },
  // 销毁前移除事件
  beforeDestroy () {
    this.remove_key_down_input()
    // console.log('des')
  }

}
</script>
<style scoped>
.user-input.user-input-hook .active{
  border-color:  #E8A400;
}
.login-popup {
  position: fixed;
  left: 50%;
  margin-left: -133px;
  z-index: 666;
  width: 267px;
  box-sizing: border-box;
  border-radius: 2px;
  background: #fff;
  font-family: PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif;
  font-size: 14px;
  -webkit-user-select: none;
  user-select: none;
}

.pop-slogin {
  position: relative;
  padding-top: 40px;
}

.pop-slogin .title {
  text-align: center;
  font-size: 16px;
  color: #333;
  margin-bottom: 7px;
}

.pop-slogin .error {
  height: 10px;
  opacity: 0;
  transition: all .25s;
  -webkit-transition: all .25s;
  text-align: center;
  font-size: 10px;
  color: #ff5454;
}

.pop-slogin .phone-wrapper {
  margin-top: 10px;
  text-align: center;
}

.pop-slogin .phone-wrapper .phone {
  vertical-align: center;
  font-size: 12px;
  color: #999;
}

.pop-slogin .phone-wrapper .btn.active {
  border-color: #666;
  color: #666;
}

.pop-slogin .phone-wrapper .btn {
  display: inline-block;
  box-sizing: border-box;
  width: 90px;
  height: 30px;
  margin: 20px auto;
  line-height: 30px;
  vertical-align: top;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 12px;
  color: #ccc;
  text-align: center;
}

.pop-slogin .user-input {
  margin: 0 14px 10px;
  position: relative;
  background-color: #fff;
  z-index: 601;
}

.pop-slogin .user-input>span {
  display: inline-block;
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  line-height: 50px;
  margin-right: 5px;
  vertical-align: middle;
  border: 1px solid #e5e5e5;
  border-radius: 2px;
  text-align: center;
  font-size: 26px;
  color: #333;
}


.pop-slogin .desc {
  height: 10px;
  margin-bottom: 8px;
  visibility: hidden;
  text-align: center;
  font-size: 10px;
  color: #adadad;
}
</style>