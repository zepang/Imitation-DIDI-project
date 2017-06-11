<template>
  <div class="mf-wrap">
    <div class="mf-dialog">
      <span class="mf-dialog-close" style="display: none;">
        <icon name="exclamation-circle"></icon>
      </span>
      <div class="confirm">
        <p class="mf-dialog-icon">
          <icon name="exclamation-circle" scale=2 ></icon>
        </p>
        <div class="mf-dialog-tip">
          <p>滴滴未获取到您的定位权限，请到设置中开启</p>
        </div>
        <div class="mf-dialog-btns border-right-1px">
          <a href="javascript:;" class="border-top-1px mf-dialog-btn-active" @click="toSuggest">输入上车点</a>
          <a href="javascript:;" class="border-top-1px" @click="close_location_error">我知道了</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Icon from 'vue-awesome/components/Icon'
import {mapActions,mapState} from 'vuex'
export default {
    computed: {
        ...mapState([
            'ismask',
            'location'
        ])
    },
    methods: {
        toSuggest(){
            this.$router.push({path:'/suggest'})
        },
    ...mapActions([
      'show_suggest',
      'switch_mask',
      'close_location_error'
    ])
  },
  components: {
    Icon
  }
}
</script>
<style>
.mf-layer .mf-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    z-index: 999;
}
.mf-dialog {
    width: 270px;
    padding: 0;
    text-align: center;
    overflow: hidden;
    border-radius: 2px;
    background-color: #fff;
}
.mf-dialog .alert, .mf-dialog .confirm {
    position: relative;
}
.mf-dialog .mf-dialog-icon {
    margin-top: 20px;
    margin-bottom: 16px;
    line-height: 1;
    color: #4a4c5b;
    font-size: 30px;
}
.mf-dialog .mf-dialog-icon+.mf-dialog-tip {
    margin-top: -4px;
}
.mf-dialog .mf-dialog-tip {
    padding: 0 16px;
    margin: 16px 0;
    text-align: left;
    color: #666;
    font-size: 14px;
    line-height: 22px;
}
.mf-dialog .mf-dialog-tip>p {
    display: table;
    margin: auto;
}
.border-bottom-1px, .border-left-1px, .border-right-1px, .border-top-1px {
    position: relative;
}
.mf-dialog-btns {
    overflow: hidden;
    width: 100%;
}
.border-bottom-1px:after, .border-bottom-1px:before, .border-left-1px:after, .border-left-1px:before, .border-right-1px:after, .border-right-1px:before, .border-top-1px:after, .border-top-1px:before {
    content: "";
    display: block;
    position: absolute;
    transform-origin: 0 0;
}
.border-right-1px:after {
    border-right: 1px solid #f5f5f5;
    top: 0;
    right: 0;
    height: 100%;
    transform-origin: right 0;
}
.mf-dialog .confirm .mf-dialog-btns.border-right-1px:after {
    right: 50%;
    border-color: #ebebeb;
}
.mf-dialog-btns a {
    display: inline-block;
    width: 100%;
    padding: 17px 10px;
    margin: 0;
    font-size: 16px;
    line-height: 1;
    text-align: center;
    text-decoration: none;
    color: #999;
    background-clip: padding-box;
    box-sizing: border-box;
}
.mf-dialog-btns .mf-dialog-btn-active {
    color: #fc9153;
}
.mf-dialog .confirm .mf-dialog-btns a {
    width: 50%;
    float: left;
}
.border-top-1px:before {
    border-top: 1px solid #ebebeb;
    left: 0;
    top: 0;
    width: 100%;
}
</style>