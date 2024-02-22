<template>
	<label class="form-control">
		<div class="label">
			<span class="label-text">{{ label }}</span>
		</div>
		<slot />
		<div class="label">
			<span class="label-text-alt">{{ message }}</span>
		</div>
	</label>
</template>
<script>

import Vue from 'vue'

export default Vue.component('FormControl', {
	props: {
		label: {
			type: String,
			required: true,
		},
		message: {
			type: String,
			default: '',
		},
	}
})

</script>