<template>
	<span class="loading" :class="classes"></span>
</template>
<script>

import Vue from 'vue'
import { createComponent } from '../props'

const CLASS_LIST = [
	'loading-spinner',
	'loading-dots',
	'loading-ring',
	'loading-ball',
	'loading-bars',
	'loading-infinity',
	// sizes
	'loading-xs',
	'loading-sm',
	'loading-md',
	'loading-lg',
]

export default Vue.component('Loading', createComponent('loading', CLASS_LIST))

</script>