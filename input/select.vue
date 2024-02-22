<template>
	<select
		class="select"
		:class="classes"
		:disabled="disabled"
		:name="name"
		@input="select($event.target.value)"
	>
		<option v-if="placeholder" selected>{{ placeholder }}</option>
		<option
			v-for="item in items"
			:key="item[id]"
			:selected="value ? value[id] === item[id] : false"
			:value="item[id]">{{ item[display] }}</option>
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
component.props.id = {
	type: String,
	default: 'id',
}
component.props.display = {
	type: String,
	default: 'title',
}
component.props.name = {
	type: String,
	default: '',
}
component.props.value = {
	type: Object,
}
component.props.disabled = {
	type: Boolean,
	default: false,
}
component.props.placeholder = {
	type: String,
	default: '',
}

component.methods = {
	select(value) {
		const selected = this.items.find(item => item[this.id] === value)

		this.$emit('input', selected)
	},
}

export default Vue.component('Select', component)

</script>