<template>
	<div class="dropdown dropdown-left dropdown-end">
		<div tabindex="0" role="button" class="btn m-1">Click</div>
		<ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
			<li><a>Item 1</a></li>
			<li><a>Item 2</a></li>
		</ul>
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