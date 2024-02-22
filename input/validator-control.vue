<template>
	<label class="form-control">
		<div class="label">
			<span class="label-text" :class="{ 'text-error': error }">{{ label }}</span>
		</div>
		<slot v-bind:error="error" />
		<div class="label" v-if="error">
			<span class="label-text-alt text-error">{{ message }}</span>
		</div>
	</label>
</template>
<script>
import Vue from 'vue'
import { validate } from '../utils/validators'

export default Vue.component('ValidatorControl', {
	props: {
		label: {
			type: String,
			required: true,
		},
		value: {
			type: [String, Number],
			required: true,
		},
		rules: {
			type: Array,
			required: true,
		},
	},

	data() {
		return {
			hasChanged: false
		}
	},

	computed: {
		error() {
			if(!this.hasChanged) {
				return false
			}

			return validate(this.rules, this.value).length > 0
		},

		message() {
			if(!this.hasChanged) {
				return ''
			}

			const messages = validate(this.rules, this.value)

			return messages.length === 0 ? '' : messages[0]
		},
	},

	watch: {
		value(newValue) {
			this.hasChanged = true
		},
	}
})
</script>