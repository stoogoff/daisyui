<template>
	<progress class="progress" :class="classes" :value="value" :max="max"></progress>
</template>
<script>

import Vue from 'vue'
import { createComponent } from '../props'

const CLASS_LIST = [
	// colours
	'progress-primary',
	'progress-secondary',
	'progress-accent',
	// states
	'progress-info',
	'progress-success',
	'progress-warning',
	'progress-error',
]

const component = createComponent('progress', CLASS_LIST)

component.props.value = {
	type: Number,
	default: 0,
}
component.props.max = {
	type: Number,
	default: 0,
}

export default Vue.component('Progress', component)

</script>