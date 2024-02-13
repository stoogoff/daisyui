<template>
	<dialog class="modal modal-open">
		<div class="modal-box">
			<form method="dialog" v-if="showCancel">
				<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" @click="$emit('cancel')">✕</button>
			</form>
			<slot />
		</div>
	</dialog>
</template>
<script>

import Vue from 'vue'
import { createProps } from './props'

const PREFIX = 'modal'
const CLASS_LIST = [
	'modal-top',
	'modal-middle',
	'modal-bottom',
]

export default Vue.component('Modal', {
	props: {
		...createProps(PREFIX, CLASS_LIST),
		showCancel: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		classes() {
			return createClasses(PREFIX, CLASS_LIST, this)
		},
	},
})

</script>