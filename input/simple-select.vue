<template>
	<select
		class="select"
		:class="classes"
		:disabled="disabled"
		:name="name"
		@input="$emit('input', $event.target.value)"
	>
		<option v-if="placeholder" value="" selected>{{ placeholder }}</option>
		<option
			v-for="item in items"
			:key="item"
			:selected="value === item"
			:value="item">{{ item }}</option>
	</select>
</template>
<script>

import Vue from 'vue'
import { createComponent } from '../props'

const CLASS_LIST = [
	'select-bordered',
	'select-ghost',
	// colours
	'select-primary',
	'select-secondary',
	'select-accent',
	// states
	'select-info',
	'select-success',
	'select-warning',
	'select-error',
	// sizes
	'select-xs',
	'select-sm',
	'select-md',
	'select-lg',
]

const component = createComponent('select', CLASS_LIST)

component.props.items = {
	type: Array,
	required: true,
}
component.props.name = {
	type: String,
	default: '',
}
component.props.value = {
	type: [String, Number],
}
component.props.disabled = {
	type: Boolean,
	default: false,
}
component.props.placeholder = {
	type: String,
	default: '',
}

export default Vue.component('SimpleSelect', component)

</script>