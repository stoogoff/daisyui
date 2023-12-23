<template>
	<button class="btn" :class="classes" @click="$emit('click')" :disabled="disabled"><slot /></button>
</template>
<script>

import Vue from 'vue'
import { createComponent, colours, states, sizes } from './props'

const PREFIX = 'btn'
const CLASS_LIST = [
	'btn-neutral',
	'btn-ghost',
	'btn-link',
	'btn-outline',
	'btn-active',
	'btn-disabled',
	'glass',
	'no-animation',
	'btn-wide',
	'btn-block',
	'btn-circle',
	'btn-square',
	...colours(PREFIX),
	...states(PREFIX),
	...sizes(PREFIX),
]

export default Vue.component('Button', createComponent(PREFIX, CLASS_LIST))

</script>