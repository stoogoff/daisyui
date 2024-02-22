<template>
	<input
		type="radio"
		class="radio"
		:class="classes"
		:name="name"
		:value="content"
		:checked="value === content"
		:disabled="disabled"
		@input="$emit('input', $event.target.value)"
	/>
</template>
<script>

import Vue from 'vue'
import { createComponent } from '../props'

const CLASS_LIST = [
	// colours
	'radio-primary',
	'radio-secondary',
	'radio-accent',
	// states
	'radio-info',
	'radio-success',
	'radio-warning',
	'radio-error',
	// sizes
	'radio-xs',
	'radio-sm',
	'radio-md',
	'radio-lg',
]

const component = createComponent('radio', CLASS_LIST)

component.props.name = {
	type: String,
	default: '',
}
component.props.value = {
	type: [String, Number],
	default: false,
}
component.props.content = {
	type: [String, Number],
	default: false,
}
component.props.disabled = {
	type: Boolean,
	default: false,
}
component.methods = {
	toggle() {
		if(this.disabled) return

		//this.$emit('input', !this.value)
	}
}

export default Vue.component('Radio', component)

</script>