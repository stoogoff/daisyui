<template>
	<label class="swap" :class="classes">
		<input type="checkbox" :checked="value" @click="toggle" />
		<slot />
	</label>	
</template>
<script>

import Vue from 'vue'
import { createComponent } from '../props'

const CLASS_LIST = [
	'swap-active',
	'swap-rotate',
	'swap-flip',
]

const component = createComponent('swap', CLASS_LIST)

component.props.value = {
	type: Boolean,
	default: false,
}
component.methods = {
	toggle() {
		this.$emit('input', !this.value)
	}
}

export default Vue.component('Swap', component)

</script>