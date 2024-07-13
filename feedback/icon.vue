<template>
	<span class="inline-block" :class="size" v-html="icon" />	
</template>
<script>

import Vue from 'vue'

export default Vue.component('Icon', {
	props: {
		icon: {
			type: String,
			required: true,
		},
		sm: {
			type: Boolean,
			default: false,
		},
		lg: {
			type: Boolean,
			default: false,
		},
		xLg: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		size() {
			if(this.sm) return 'w-3 h-3'
			if(this.lg) return 'w-7 h-7'
			if(this.xLg) return 'w-10 h-10'

			return 'w-5 h-5'
		},
	},
})

</script>