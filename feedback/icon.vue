<template>
	<span class="inline-block w-5 h-5" v-html="icon" />	
</template>
<script>

import Vue from 'vue'

export default Vue.component('Icon', {
	props: {
		icon: {
			type: String,
			required: true,
		},
	},
})

</script>