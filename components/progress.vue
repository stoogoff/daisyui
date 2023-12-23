<template>
	<progress class="progress" :class="classes" :value="value" :max="max"></progress>
</template>
<script>

import Vue from 'vue'
import { createComponent, colours, states } from './props'

const PREFIX = 'progress'
const CLASS_LIST = [
	...colours(PREFIX),
	...states(PREFIX),
]

const component = createComponent(PREFIX, CLASS_LIST)

component.props.value = {
	type: Number,
	default: 0,
}
component.props.max = {
	type: Number,
	default: 0,
}

console.log(CLASS_LIST)
console.log(PREFIX)
console.log(component)

export default Vue.component('Progress', component)

</script>