<template>
  <div>
    <transition enter-active-class="animated fadeInLeft"  leave-active-class="animated fadeOutRight">
      <div v-show="usersidebar" class="sidebar-container">
        <div class="user">
          <icon name="user"></icon>
          <span>{{telephone}}</span>
        </div>
        <menu-list></menu-list>
        <other-service></other-service>
      </div>
    </transition>
  
    <common-mask  @click.native="close_usersidebar"></common-mask>

  </div>
</template>
<script>
import Icon from 'vue-awesome/components/Icon'
import menuList from './menuList.vue'
import otherService from './otherService.vue'
import commonMask from '@/components/commonMask.vue'
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState([
      'usersidebar',
      'telephone'
    ])
  },
  components: {
    Icon,
    menuList,
    otherService,
    commonMask
  },
  methods: {
    ...mapActions([
      'close_usersidebar'
    ])
  },
  mounted () {
    // console.log(this.telephone)
  }
}
</script>
<style>
.fa-icon {
  vertical-align: middle;
  margin-right: 10px;
}

.mint-cell:last-child {
  background: none;
}

.sidebar-container {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 75%;
  height: 100%;
  box-shadow: 4px 0 18px 6px rgba(0, 0, 0, .12);
  background-color: #fff;
  z-index: 999;
  animation-duration: .5s;
}

.sidebar-container .user {
  color: #666;
  text-align: center;
  margin: 30px 0 40px;
}
</style>
