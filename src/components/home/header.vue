<template>
  <div class="navigator-wrapper">
    <div class="navigator">
      <div class="nav-wrapper" :class ="{shadow:shadowActive}">
        <div  class="avatar-wrapper" @click="telephone_input" >
          <div class="avatar border-right-1px">
            <icon name="user"></icon>
          </div>
        </div>
        <!--<div v-show="islogined" class="avatar-wrapper" @click="telephone_input" >
          <div class="avatar border-right-1px">
            <icon name="user"></icon>
          </div>
        </div>-->
        <v-header-nav></v-header-nav>
        <div class="more-wrapper" style="display: block;" @click="switch_navList">
          <div class="more">
              <icon name="ellipsis-h"></icon>
          </div>
        </div>
        
      </div>
      <v-more-list v-if="navListActive"></v-more-list>
      <div class="list-mask" style="display: none;"></div>
    </div>
  </div>
  
</template>
<script>
import vHeaderNav from './Nav.vue'
import vMoreList from './moreList.vue'
import Icon from 'vue-awesome/components/Icon'
import {mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'navListActive',
      'shadowActive',
      'islogined'
    ])
  },
  components : {
    vHeaderNav,
    vMoreList,
    Icon
  },
  methods: {
    ...mapActions([
      'telephone_input',
      'switch_navList'
    ])
  }
}
</script>
<style>
/*@import '../assets/css/iconfont.css';*/
.navigator-wrapper {
  position: fixed;
  z-index: 11;
  top: 0;
  left: 0;
  width: 100%;
  height: 54px;
}

.navigator .nav-wrapper.shadow {
  box-shadow: 0 2px 3px rgba(0, 0, 0, .12);
}

.navigator .nav-wrapper {
  position: relative;
  z-index: 50;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 54px;
  background: #fff;
}

.navigator .nav-wrapper .avatar-wrapper {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 44px;
  flex: 0 0 44px;
  width: 44px;
  padding-top: 19px;
  z-index: 50;
}

.navigator .nav-wrapper .avatar-wrapper .avatar {
  line-height: 14px;
  padding: 0 12px 0 16px;
}

.border-bottom-1px,
.border-left-1px,
.border-right-1px,
.border-top-1px {
  position: relative;
}

.navigator .nav-wrapper .avatar-wrapper .avatar .mfic-person {
  line-height: 1;
  font-size: 18px;
  color: #666;
}

.border-right-1px:after {
  border-right: 1px solid #f5f5f5;
  top: 0;
  right: 0;
  height: 100%;
  transform-origin: right 0;
}

.avatar .icon {
  color: #000;
  font-size: 18px;
}


.navigator .nav-wrapper .more-wrapper {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 38px;
  flex: 0 0 38px;
  width: 38px;
}

.navigator .nav-wrapper .more-wrapper .more {
  padding: 19px 16px 19px 6px;
}
.navigator .nav-wrapper .more-wrapper .more .icon{
  font-size: 18px;
  font-weight: bold;
}


.navigator .list-mask {
    position: fixed;
    left: 0;
    top: 55px;
    bottom: 0;
    z-index: 30;
    width: 100%;
    background-color: rgba(37,38,45,.4);
}

/*public*/
li {
    list-style: none;
}
.border-bottom-1px:after,
.border-bottom-1px:before,
.border-left-1px:after,
.border-left-1px:before,
.border-right-1px:after,
.border-right-1px:before,
.border-top-1px:after,
.border-top-1px:before {
  content: "";
  display: block;
  position: absolute;
  transform-origin: 0 0;
}
</style>