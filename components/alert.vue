<template>
	<div role="alert" class="alert" :class="classes"><slot /></div>
</template>
<script>

import Vue from 'vue'
import { createComponent } from './props'

const CLASS_LIST = [
	// states
	'alert-info',
	'alert-success',
	'alert-warning',
	'alert-error',
]

export default Vue.component('Alert', createComponent('alert', CLASS_LIST))

</script>