<template>
	<input
		:type="type"
		class="input"
		:class="classes"
		:disabled="disabled"
		:placeholder="placeholder"
		:name="name"
		:value="value"
		@input="$emit('input', $event.target.value)"
		@focus="$emit('focus')"
		@blur="$emit('blur')"
	/>
</template>
<script>

import Vue from 'vue'
import { createComponent } from '../props'

const CLASS_LIST = [
	'input-bordered',
	'input-ghost',
	// colours
	'input-primary',
	'input-secondary',
	'input-accent',
	// states
	'input-info',
	'input-success',
	'input-warning',
	'input-error',
	// sizes
	'input-xs',
	'input-sm',
	'input-md',
	'input-lg',
]

const component = createComponent('input', CLASS_LIST)

component.props.name = {
	type: String,
	default: '',
}
component.props.type = {
	type: String,
	default: 'text',
}
component.props.value = {
	type: [String, Number],
	required: true,
}
component.props.disabled = {
	type: Boolean,
	default: false,
}
component.props.placeholder = {
	type: String,
	default: '',
}

export default Vue.component('Input', component)

</script>