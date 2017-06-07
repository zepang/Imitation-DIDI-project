<template>
	<div id="container"></div>
</template>
<script >
import Vue from 'vue'
import {mapActions} from 'vuex'
	export default {
		methods:{
			...mapActions([
					'get_location'
				])
		},
	created(){
		this.get_location()
	}
}
</script>
<style type="text/css">
	#container{
		height: 94%;
		z-index: 0;
	}
</style>
