<template>
  <div class="autocompleteList" v-show="exist">
    <template v-for="(item, index) in autocompleteList">
      <!--<mt-cell-swipe :titel="item.name" :value="item.name"> {{item.name}} </mt-cell-swipe>-->
      <a class="mint-cell mint-cell-swipe" @click="choose_address(index)">
        <!---->
        <div class="mint-cell-left" style="transform: translate3d(-1px, 0px, 0px);">
          <div class="mint-cell-swipe-buttongroup"></div>
        </div>
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <!---->
            <span class="mint-cell-text">{{item.name}}</span>
            <!---->
          </div>
          <div class="mint-cell-value"> 
            <!---->
            <!---->
          </div>
        </div>
        <div class="mint-cell-right" style="transform: translate3d(0px, 0px, 0px);">
          <div class="mint-cell-swipe-buttongroup"></div>
        </div>
        <!---->
      </a>
    </template>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      exist: true
    }
  },
  computed: {
    ...mapState([
      'autocompleteList'
    ])
  },
  methods: {
    choose_address(index){
      this.$store.dispatch('choose_address', index)
      this.$store.dispatch('close_autocompletelist')
        this.$router.push({path:'/'})
    }
  },
  mounted () {
  }
}
</script>
<style>
.autocompleteList{
  position: absolute;
  z-index: 999;
  width: 90%;
  top: 50px;
  left: 5%;
  background-color: #fff;
}
</style>
