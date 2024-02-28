<template>
	<div class="card">
		<div class="card-body">
			<figure v-if="imageUrl"><img :src="imageUrl" /></figure>
			<slot />
		</div>
	</div>
</template>
<script>

import Vue from 'vue'
import { createComponent } from '../props'

const CLASS_LIST = [
	'card-bordered',
	'image-full',
	'card-normal',
	'card-compact',
	'card-side',
	// shadow
	'shadow-sm',
	'shadow',
	'shadow-md',
	'shadow-lg',
	'shadow-xl',
]

const component = createComponent('card', CLASS_LIST)

component.props.imageUrl = {
	type: String,
	default: '',
}

export default Vue.component('Card', component)

</script>