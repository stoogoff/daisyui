<template>
	<div class="tooltip" :class="classes" :data-tip="title"><slot /></div>
</template>
<script>

import Vue from 'vue'
import { createComponent, colours, states } from './props'

const PREFIX = 'tooltip'
const CLASS_LIST = [
	'tooltip-open',
	'tooltip-top',
	'tooltip-bottom',
	'tooltip-left',
	'tooltip-right',
	...colours(PREFIX),
	...states(PREFIX),
]

const component = createComponent(PREFIX, CLASS_LIST)

component.props.title = {
	type: String,
	required: true,
}

export default Vue.component('Tooltip', component)

</script>