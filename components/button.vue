<template>
	<button class="btn" @click="$emit('click')" :disabled="disabled"><slot /></button>
</template>
<script>

import Vue from 'vue'
import { createProps, createClasses } from '~/utils/props'

const CLASS_LIST = [
	'btn-neutral',
	'btn-primary',
	'btn-secondary',
	'btn-accent',
	'btn-info',
	'btn-success',
	'btn-warning',
	'btn-error',
	'btn-ghost',
	'btn-link',
	'btn-outline',
	'btn-active',
	'btn-disabled',
	'glass',
	'no-animation',
	'btn-lg',
	'btn-md',
	'btn-sm',
	'btn-xs',
	'btn-wide',
	'btn-block',
	'btn-circle',
	'btn-square',
]

export default Vue.component('Button', {
	props: createProps('btn', CLASS_LIST),

	computed: {
		classes() {
			return createClasses('btn', CLASS_LIST, this)
		},
	},
})

</script>