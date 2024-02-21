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
import { createComponent } from '../props'

const CLASS_LIST = [
	'modal-top',
	'modal-middle',
	'modal-bottom',
]

const component = createComponent('modal', CLASS_LIST)

component.props.showCancel = {
	type: Boolean,
	default: false,
}

export default Vue.component('Modal', component)

</script>