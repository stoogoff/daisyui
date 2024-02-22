<template>
	<input
		type="checkbox"
		class="checkbox"
		:class="classes"
		:checked="value"
		:name="name"
		:disabled="disabled"
		@click="toggle"
	/>
</template>
<script>

import Vue from 'vue'
import { createComponent } from '../props'

const CLASS_LIST = [
	// colours
	'toggle-primary',
	'toggle-secondary',
	'toggle-accent',
	// states
	'toggle-info',
	'toggle-success',
	'toggle-warning',
	'toggle-error',
	// sizes
	'toggle-xs',
	'toggle-sm',
	'toggle-md',
	'toggle-lg',
]

const component = createComponent('toggle', CLASS_LIST)

component.props.name = {
	type: String,
	default: '',
}
component.props.value = {
	type: Boolean,
	default: false,
}
component.props.disabled = {
	type: Boolean,
	default: false,
}
component.methods = {
	toggle() {
		if(this.disabled) return

		this.$emit('input', !this.value)
	}
}

export default Vue.component('Toggle', component)

</script>