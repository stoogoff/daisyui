<template>
	<input
		type="file"
		class="file-input"
		:class="classes"
		:disabled="disabled"
		:name="name"
		:value="value"
		@input="$emit('input', $event.target.value)"
	/>
</template>
<script>

import Vue from 'vue'
import { createComponent } from '../props'

const CLASS_LIST = [
	'file-bordered',
	'file-ghost',
	// colours
	'file-primary',
	'file-secondary',
	'file-accent',
	// states
	'file-info',
	'file-success',
	'file-warning',
	'file-error',
	// sizes
	'file-xs',
	'file-sm',
	'file-md',
	'file-lg',
]

const component = createComponent('file', CLASS_LIST)

component.props.name = {
	type: String,
	default: '',
}
component.props.value = {
	type: [String, Number],
	required: true,
}
component.props.disabled = {
	type: Boolean,
	default: false,
}

export default Vue.component('File', component)

</script>