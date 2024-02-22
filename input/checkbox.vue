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
	'checkbox-primary',
	'checkbox-secondary',
	'checkbox-accent',
	// states
	'checkbox-info',
	'checkbox-success',
	'checkbox-warning',
	'checkbox-error',
	// sizes
	'checkbox-xs',
	'checkbox-sm',
	'checkbox-md',
	'checkbox-lg',
]

const component = createComponent('checkbox', CLASS_LIST)

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

export default Vue.component('Checkbox', component)

</script>