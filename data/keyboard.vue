<template>
	<kbd class="kbd" :class="classes">
		<slot />
	</kbd>
</template>
<script>

import Vue from 'vue'
import { createComponent } from '../props'

const CLASS_LIST = [
	// sizes
	'kbd-xs',
	'kbd-sm',
	'kbd-md',
	'kbd-lg',
]

export default Vue.component('Keyboard', createComponent('kbd', CLASS_LIST))

</script>