<template>
  <div class="setting-wrapper">
    <ul class="list-ul">
      <li class="list-li border-bottom-1px">
        <div class="item">
          <p class="item-title">实名认证</p>
          <p class="item-status state-highlight">未认证</p>
          <i class="mint-cell-allow-right"></i>
        </div>
      </li>
      <li class="list-li border-bottom-1px">
        <div class="item">
          <p class="item-title">密码设置</p>
          <!---->
          <i class="mint-cell-allow-right"></i>
        </div>
      </li>
      <li class="list-li border-bottom-1px">
        <div class="item">
          <p class="item-title">用户指南</p>
          <!---->
          <i class="mint-cell-allow-right"></i>
        </div>
      </li>
      <li class="list-li border-bottom-1px">
        <div class="item">
          <p class="item-title">法律条款</p>
          <!---->
          <i class="mint-cell-allow-right"></i>
        </div>
      </li>
    </ul>
    <div class="login-out-button">
      <button type="button" class="mf-btn logout white" @click="login_out">退出登录</button>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  methods: {
    ...mapActions([
      'close_usersidebar'
    ]),
    login_out() {
      console.log('qingchu')
      localStorage.removeItem("telephone")
      this.$store.dispatch('close_usersidebar')
      this.$router.go(-1)
    }
  }
}
</script>
<style>
.setting-wrapper {
  background-color: #F3F4F5;
  text-align: left;
}
li {
    list-style: none;
}
.list-ul .list-li {
    position: relative;
    height: 50px;
    font-size: 12px;
    padding: 0 9px 0 15px;
}

.list-ul {
    background-color: #fff;
    margin-bottom: 10px;
}
.border-bottom-1px:after, .border-bottom-1px:before, .border-left-1px:after, .border-left-1px:before, .border-right-1px:after, .border-right-1px:before, .border-top-1px:after, .border-top-1px:before {
    content: "";
    display: block;
    position: absolute;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}
.border-bottom-1px:after {
    border-bottom: 1px solid #ebebeb;
    left: 0;
    bottom: 0;
    width: 100%;
    -webkit-transform-origin: 0 bottom;
    transform-origin: 0 bottom;
}
.list-ul .list-li .item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    line-height: 49px;
    color: #666;
}
.list-ul .list-li .item .item-title {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: 14px;
    color: #666;
}
.list-ul .list-li .item .item-status, .list-ul .list-li .item .mfic-click {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
}
.list-ul .list-li .item .item-status{
  margin-right: 28px;
}
.state-highlight {
    color: #ff525d;
}
.mf-btn {
  display: block;
  margin: 0;
  padding: 17px 16px;
  width: 100%;
  line-height: 16px;
  border-radius: 2px;
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  background-image: none;
  white-space: nowrap;
  outline: none;
  font-size: 16px;
  color: #fff;
  background: #4a4c5b;
  border: none;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

.mf-btn.white {
  color: #666;
  background: #fcfcfc;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1);
}

.logout.mf-btn {
  font-size: 14px;
  color: #fc9153;
}
</style>