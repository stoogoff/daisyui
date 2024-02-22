<template>
	<textarea
		class="textarea"
		:class="classes"
		:disabled="disabled"
		:placeholder="placeholder"
		:name="name"
		:value="value"
		@input="$emit('input', $event.target.value)"
	/>
</template>
<script>

import Vue from 'vue'
import { createComponent } from '../props'

const CLASS_LIST = [
	'textarea-bordered',
	'textarea-ghost',
	// colours
	'textarea-primary',
	'textarea-secondary',
	'textarea-accent',
	// states
	'textarea-info',
	'textarea-success',
	'textarea-warning',
	'textarea-error',
	// sizes
	'textarea-xs',
	'textarea-sm',
	'textarea-md',
	'textarea-lg',
]

const component = createComponent('textarea', CLASS_LIST)

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
component.props.placeholder = {
	type: String,
	default: '',
}

export default Vue.component('Textarea', component)

</script>