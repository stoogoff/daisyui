<template>
	<div class="drawer" :class="{ 'drawer-end': end }">
		<input :id="name" type="checkbox" class="drawer-toggle" v-model="checkbox" />
		<div class="drawer-content">
			<slot />
		</div>
		<div class="drawer-side">
			<label :for="name" aria-label="Close drawer" class="drawer-overlay"></label>
			<slot name="menu" />
		</div>
	</div>
</template>
<script>

import Vue from 'vue'

export default Vue.component('Drawer', {
	props: {
		name: {
			type: String,
			default: 'drawer',
		},
		end: {
			type: Boolean,
			default: false,
		}
	},

	data() {
		return {
			checkbox: false,
		}
	},

	watch: {
		checkbox(state) {
			this.$emit(state ? 'open' : 'close')
		},
	},
})

</script>
