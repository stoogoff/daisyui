<template>
	<div class="dropdown">
		<slot name="activator" />
		<slot />
	</div>
</template>
<script>

import Vue from 'vue'
import { createComponent } from '../props'

const CLASS_LIST = [
	// position
	'dropdown-end',
	'dropdown-top',
	'dropdown-bottom',
	'dropdown-left',
	'dropdown-right',
	// state
	'dropdown-hover',
	'dropdown-open',
]

export default Vue.component('Dropdown', createComponent('dropdown', CLASS_LIST))

</script>