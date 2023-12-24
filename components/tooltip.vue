<template>
	<div class="tooltip" :class="classes" :data-tip="title"><slot /></div>
</template>
<script>

import Vue from 'vue'
import { createComponent } from './props'

const CLASS_LIST = [
	'tooltip-open',
	'tooltip-top',
	'tooltip-bottom',
	'tooltip-left',
	'tooltip-right',
	// colours
	'tooltip-primary',
	'tooltip-secondary',
	'tooltip-accent',
	// states
	'tooltip-info',
	'tooltip-success',
	'tooltip-warning',
	'tooltip-error',
]

const component = createComponent('tooltip', CLASS_LIST)

component.props.title = {
	type: String,
	required: true,
}

export default Vue.component('Tooltip', component)

</script>