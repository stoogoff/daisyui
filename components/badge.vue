<template>
	<span class="badge" :class="classes"><slot /></span>
</template>
<script>

import Vue from 'vue'
import { createComponent } from './props'

const CLASS_LIST = [
	'badge-neutral',
	'badge-ghost',
	'badge-link',
	'badge-outline',
	// colours
	'badge-primary',
	'badge-secondary',
	'badge-accent',
	// states
	'badge-info',
	'badge-success',
	'badge-warning',
	'badge-error',
	// sizes
	'badge-xs',
	'badge-sm',
	'badge-md',
	'badge-lg',
]

export default Vue.component('Badge', createComponent('badge', CLASS_LIST))

</script>