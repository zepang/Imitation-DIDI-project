<template>
<div class="taxi-page">
  <v-form></v-form>
  <v-button bgc="#4a4c5b"  @click.native="order">呼叫出租车</v-button>
</div>
</template>
<script>
  import vForm from '@/components/public/Form.vue'
  import vButton from '@/components/public/Button.vue'
  import {mapState, mapActions} from 'vuex'
  export default {
    computed: {
      ...mapState([
        'position',
        'islogined',
        'address'
      ])
    },
    components: {
      vForm,
      vButton 
    },
    methods: {
      order () {
        console.log(this.address.start || this.position.address,this.address.end )
        if(this.address.start || this.position.address && this.address.end && this.islogined) {
          this.$router.push({ path: 'order/loader' })
        }else if( !this.islogined){
          this.$store.dispatch('telephone_input')
        }
      }
    }
  }
</script>
<style>
.taxi-page {
    position: absolute;
    padding: 10px;
    width: 100%;
    top: 54px;
    bottom: 0;
    box-sizing: border-box;
    overflow: auto;
    font-size: 12px;
}
</style>