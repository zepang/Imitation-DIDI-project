<template>
  <div id="app">
    <v-header></v-header>
    <user-sider v-show="usersidebar"></user-sider>
    <router-view></router-view>
    <v-mask v-show="ismask" :show="ismask"></v-mask>
    <!--<v-footer></v-footer>-->
    <!--<suggest v-if="suggest"></suggest>-->
  
  </div>
</template>

<script>
import vHeader from './header.vue'
import vMask from '../Mask.vue'
import suggest from '../suggest/suggest.vue'
import userSider from '../userSidebar/sideBar.vue'
import { mapActions, mapState } from 'vuex'

// import vFooter from '@/components/footer.vue'
// import mapState from 'vuex'
export default {
  computed: {
    ...mapState([
      'usersidebar',
      'checkTelephone',
      'ismask',
      'suggest',
      'hasLocation'
    ])
  },
  created() {
    // if(this.$router.path)
    // components.log(this.$router.path)
    // this.$router.replace({path:'home/taxi'})
  },
  methods: {
    // firstLocation() {
    //   if (!this.hasLocation) {
        
    //   }
    // },
    ...mapActions([
      'get_telephone'
    ])
  },
  components: {
    vHeader,
    vMask,
    suggest,
    userSider
  },
  mounted() {
    this.get_telephone(),
    this.$store.dispatch('getCurrentPosition', 'AMap')
  }
}
</script>