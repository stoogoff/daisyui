<template>
	<slide-up>
		<div class="w-full h-full fixed block inset-0 bg-white overflow-x-scroll z-40">
			<slot />
		</div>
	</slide-up>
</template>
<script>
import Vue from 'vue'
import SlideUp from './slide-up.vue'

export default Vue.component('ScreenSlide', {
	components: {
		'slide-up': SlideUp,
	},
})
</script>