<template>
    <div>
        <div class="pop-plogin">
            <div class="title title-hook">登录</div>
            <div class="error error-hook"></div>
            <div class="phone-wrapper border-1px phone-wrapper-hook">
                <input type="tel" class="input-val phone-hook needsfocus" placeholder="请输入手机号码" maxlength="11" v-model="telephone">
                <div class="phone-suggest suggest-hook" style="display: none;"></div>
            </div>
            <div class="desc desc-hook"></div>
            <div class="login-btn btn-hook" v-show="!eventActive" :class="isTelephoneVal? 'bg-active': 'bg-base'">下一步</div>
            <div class="login-btn btn-hook" v-show="eventActive" :class="isTelephoneVal? 'bg-active': 'bg-base'" @click="toMessageConfirm">下一步</div>
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
            telephone:'',
            eventActive: false
        }
    }, 
    watch: {
      telephone (value) {
          if(value) {
            this.eventActive = true
            this.$store.dispatch('check_telephone',value)
            console.log(value)
          }else{
            this.eventActive = false
          }
      }  
    },
    computed: {
      ...mapState([
          'isTelephoneVal'
      ])  
    },
    methods: {
        ...mapActions([
            'close_mask',
            'toMessageConfirm'
            ])
    }
}
</script>
<style>
.pop-plogin {
    padding-top: 40px;
}

.pop-plogin .title {
    margin: -2px 0 7px;
    text-align: center;
    font-size: 16px;
    color: #333;
}

.pop-plogin .error {
    height: 10px;
    opacity: 0;
    transition: all .25s;
    -webkit-transition: all .25s;
    text-align: center;
    font-size: 10px;
    color: #ff5454;
}

.pop-plogin .phone-wrapper,
.pop-plogin .pwd-wrapper {
    width: 207px;
    margin: 0 auto;
    height: 40px;
    line-height: 40px;
    position: relative;
}

.login-popup input {
    outline: none;
    border: none;
    background: transparent;
}

.pop-plogin .input-val {
    width: 207px;
    line-height: 22px;
    margin-top: 16px;
    text-align: center;
    color: #333;
    font-size: 16px;
    outline: 0;
}

.pop-plogin .phone-wrapper:after {
    display: block;
    position: absolute;
    border-top: 1px solid rgba(0, 0, 0, .2);
    left: 0;
    width: 100%;
    content: " ";
}

.pop-plogin .pwd-wrapper {
    display: none;
    position: relative;
    height: 0;
    overflow: hidden;
    margin-top: 0;
    transition: all .25s;
    -webkit-transition: all .25s;
}

.pop-plogin .login-btn {
    width: 100%;
    height: 44px;
    line-height: 44px;
    margin-top: 30px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    text-align: center;
    font-size: 16px;
    color: #fff;
}
.bg-active {
    background: #4a4c5b;
}
.bg-base{
    background: #ccc;
}
.login-popup .close {
    position: absolute;
    right: 2px;
    top: 2px;
    padding: 8px;
}

.login-popup .close>span {
    display: inline-block;
    width: 12px;
    height: 12px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUJDMDk1Q0ZEODc5MTFFNUFDRDE4N0I0NzBENTMwRkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUJDMDk1RDBEODc5MTFFNUFDRDE4N0I0NzBENTMwRkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCRjEzRjc3QUQ4NzgxMUU1QUNEMTg3QjQ3MEQ1MzBGQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1QkMwOTVDRUQ4NzkxMUU1QUNEMTg3QjQ3MEQ1MzBGQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvlDFyMAAAEESURBVHjapJXRCoIwFIbnMbrxQuhxggi6K0hC6DEV6sKu7KZn6BWqB0iv+wcThs15tnPgV3Du+3RzM6mq6qmU+iAF0qnAKsvy71pd1zlOFyQnHN7IDrkhmRKWgTfIFnlpwQl5IBupxIKvkTty1oIvcpBKHPAjhq8n0y6STMF1G1n3RUl88LEgRuKFuwQhkln4lIAjYcF9Ap+EDde1mJnDQdJYkpQL5whcEl2t2Vr6uc7E/NRTk6GWSMLpyBHYY96GrhMKhBfjicdCy2IFLnhv5mTPlVAgfKiOK6EIeJCEIuFsCQngwy/TKyEJnCMhKXxOogVXKdwjqew3EMEdEv3Aq58AAwDhrKbpP7oZmgAAAABJRU5ErkJggg==);
    background-size: 12px 12px;
}
</style>