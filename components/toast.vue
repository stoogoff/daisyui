<template>
	<div class="toast" :class="classes"><slot /></div>
</template>
<script>

import Vue from 'vue'
import { createComponent } from './props'

const CLASS_LIST = [
	'toast-start',
	'toast-center',
	'toast-end',
	'toast-top',
	'toast-middle',
	'toast-bottom',
]

export default Vue.component('Toast', createComponent('toast', CLASS_LIST))

</script>