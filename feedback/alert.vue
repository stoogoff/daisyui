<template>
	<div role="alert" class="alert" :class="classes"><slot /></div>
</template>
<script>

import Vue from 'vue'
import { createComponent } from '../props'

const CLASS_LIST = [
	// states
	'alert-info',
	'alert-success',
	'alert-warning',
	'alert-error',
	// shadow
	'shadow-sm',
	'shadow',
	'shadow-md',
	'shadow-lg',
	'shadow-xl',
]

export default Vue.component('Alert', createComponent('alert', CLASS_LIST))

</script>