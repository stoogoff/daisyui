<template>
	<div class="radial-progress" :style="`--value:${ percent };`" role="progressbar">{{ percent }}%</div>
</template>
<script>

import Vue from 'vue'
import { createComponent } from '../props'

const component = createComponent('radial-progress', [])

component.props.percent = {
	type: Number,
	default: 0,
}

export default Vue.component('RadialProgress', component)

</script>