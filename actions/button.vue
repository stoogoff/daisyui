<template>
	<button class="btn" :class="classes" @click="$emit('click')" :disabled="disabled"><slot /></button>
</template>
<script>

import Vue from 'vue'
import { createComponent } from '../props'

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
	// colours
	'btn-primary',
	'btn-secondary',
	'btn-accent',
	// states
	'btn-info',
	'btn-success',
	'btn-warning',
	'btn-error',
	// sizes
	'btn-xs',
	'btn-sm',
	'btn-md',
	'btn-lg',
]

export default Vue.component('Button', createComponent('btn', CLASS_LIST))

</script>