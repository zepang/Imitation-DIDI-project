<template>
  <div id="container" ref="map">
  
  </div>
</template>

<script>
export default {
  methods: {
    createMap() {
      var map = new AMap.Map('container', {
        resizeEnable: true,
        zoom: 10
      })
      this.$store.dispatch('getCurrentPosition', map)
    }
  },
  mounted() {
    this.createMap()
    
  }
}
// export default {
//   methods: {
//     location() {
//       console.log('map')
//       var map = new AMap.Map('container', {
//         resizeEnable: true,
//         zoom: 12,
//         center: [116.480983, 40.0958]
//       })
//     }
//   },
//   mounted() {
//     this.$store.dispatch('get_location2',this.$refs.map.id)
//   }
// }
</script>
  <style>
#container {
  height: 100%;
}
</style>
