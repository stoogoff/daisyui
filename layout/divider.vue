<template>
	<div class="divider" :class="classes">
		<slot />
	</div>
</template>
<script>

import Vue from 'vue'
import { createComponent } from '../props'

const CLASS_LIST = [
	'divider-neutral',
	// colours
	'divider-primary',
	'divider-secondary',
	'divider-accent',
	// states
	'divider-info',
	'divider-success',
	'divider-warning',
	'divider-error',
	// position
	'divider-vertical',
	'divider-horizontal',
	'divider-start',
	'divider-end',
]

export default Vue.component('Divider', createComponent('divider', CLASS_LIST))

</script>