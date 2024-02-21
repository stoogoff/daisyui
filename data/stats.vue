<template>
	<div class="stats" :class="classes">
		<slot />
	</div>
</template>
<script>

import Vue from 'vue'
import { createComponent } from '../props'

const CLASS_LIST = [
	'stats-horizontal',
	'stats-vertical',
]

export default Vue.component('Stats', createComponent('stats', CLASS_LIST))

</script>