<template>
	<span class="loading" :class="classes"></span>
</template>
<script>

import Vue from 'vue'
import { createComponent, sizes } from './props'

const PREFIX = 'loading'
const CLASS_LIST = [
	'loading-spinner',
	'loading-dots',
	'loading-ring',
	'loading-ball',
	'loading-bars',
	'loading-infinity',
	...sizes(PREFIX),
]

export default Vue.component('Loading', createComponent(PREFIX, CLASS_LIST))

</script>