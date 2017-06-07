<template>
  <div id="container" ref="map">
  
  </div>
</template>

<script>
export default {
  methods: {
    location() {
      console.log('map')
      var map = new AMap.Map('container', {
        resizeEnable: true,
        zoom: 12,
        center: [116.480983, 40.0958]
      })
    }
  },
  mounted() {
    // console.log('map')
    // this.location()
    this.$store.dispatch('get_location2',this.$refs.map.id)
    // console.log(this.$refs.map.id)
  }
}
</script>
  <style>
#container {
  height: 100%;
}
</style>
