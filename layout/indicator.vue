<template>
	<div class="indicator" :class="classes">
		<div class="indicator-content badge" :class="badgeClass">{{ badgeText }}</div>
		<slot />
	</div>
</template>
<script>

import Vue from 'vue'
import { createComponent } from '../props'

const CLASS_LIST = [
	'indicator-start',
	'indicator-center',
	'indicator-end',
	'indicator-top',
	'indicator-middle',
	'indicator-bottom',
]

const component = createComponent('indicator', CLASS_LIST)

component.props.badgeText = {
	type: String,
	default: '',
}
component.props.badgeClass = {
	type: String,
	default: '',
}

export default Vue.component('Indicator', component)

</script>