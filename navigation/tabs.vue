<template>
	<div role="tablist" class="tabs" :class="classes">
		<slot />
	</div>
</template>
<script>

import Vue from 'vue'
import { createComponent } from '../props'

const CLASS_LIST = [
	'tabs-box',
	'tabs-bordered',
	'tabs-lifted',
	// sizes
	'tabs-xs',
	'tabs-sm',
	'tabs-md',
	'tabs-lg',
]

export default Vue.component('Tabs', createComponent('tabs', CLASS_LIST))

</script>