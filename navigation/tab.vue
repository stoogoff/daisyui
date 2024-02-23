<template>
	<input
		type="radio"
		:name="group"
		role="tab"
		class="tab"
		:checked="active"
		:aria-label="label" />
</template>
<script>

import Vue from 'vue'

export default Vue.component('Tab', {
	props: {
		group: {
			type: String,
			required: true,
		},
		label: {
			type: String,
			required: true,
		},
		active: {
			type: Boolean,
			default: false,
		},
	},
})

</script>