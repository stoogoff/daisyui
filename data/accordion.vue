<template>
	<div class="collapse" :class="classes">
		<input type="checkbox" :name="group" /> 
		<div class="collapse-title text-xl font-medium">
			<slot name="title" />
		</div>
		<div class="collapse-content"> 
			<slot />
		</div>
	</div>	
</template>
<script>

import Vue from 'vue'
import { createComponent } from '../props'

const CLASS_LIST = [
	'collapse-arrow',
	'collapse-plus',
	'collapse-open',
	'collapse-close',
	// shadow
	'shadow-sm',
	'shadow',
	'shadow-md',
	'shadow-lg',
	'shadow-xl',
	'shadow-2xl',
]

const component = createComponent('collapse', CLASS_LIST)

component.props.group = {
	type: String,
	required: true,
}

export default Vue.component('Accordion', component)

</script>
