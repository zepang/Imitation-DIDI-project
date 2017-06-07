<template>
  <div id="app">
    <v-header></v-header>
    <user-sider v-show="usersidebar"></user-sider>
    <router-view></router-view>
    <v-mask v-show="ismask" :show="ismask"></v-mask>
    <!--<v-footer></v-footer>-->
    <suggest v-if="suggest"></suggest>

  </div>
</template>

<script>
import vHeader from './header.vue'
import vMask from '../Mask.vue'
import suggest from '../suggest/suggest.vue'
import userSider from '../userSidebar/sideBar.vue'
import {mapActions, mapState} from 'vuex'

// import vFooter from '@/components/footer.vue'
// import mapState from 'vuex'
export default {
  computed: {
    ...mapState([
      'usersidebar',
      'checkTelephone',
      'ismask',
      'suggest'
    ])
  },
  created () {
    // if(this.$router.path)
    // components.log(this.$router.path)
    // this.$router.replace({path:'home/taxi'})
  },
  methods: {
    ...mapActions([
      'get_telephone',
      'get_location'
    ])
  },
  components: {
    vHeader,
    vMask,
    suggest,
    userSider
  },
  mounted () {
    this.get_telephone(),
    this.get_location()
  }
}
</script>