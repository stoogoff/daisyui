<template>
	<span class="badge" :class="classes"><slot /></span>
</template>
<script>

import Vue from 'vue'
import { createComponent, colours, states, sizes } from './props'

const PREFIX = 'badge'
const CLASS_LIST = [
	'badge-neutral',
	'badge-ghost',
	'badge-link',
	'badge-outline',
	...colours(PREFIX),
	...states(PREFIX),
	...sizes(PREFIX),
]

console.log(CLASS_LIST)

export default Vue.component('Badge', createComponent(PREFIX, CLASS_LIST))

</script>