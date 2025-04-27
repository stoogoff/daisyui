<template>
	<div class="relative">
		<text-input
			:disabled="disabled"
			:placeholder="placeholder"
			:name="name"
			:value="value"
			@input="oninput"
			@focus="show"
			@blur="hide"
			class="w-full"
			:bordered="bordered"
			:ghost="ghost"
			:primary="primary"
			:secondary="secondary"
			:accent="accent"
			:info="info"
			:success="success"
			:warning="warning"
			:error="error"
			:xs="xs"
			:sm="sm"
			:md="md"
			:lg="lg"
		 />
		 <ul v-show="canShow" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box absolute">
		 	<li
		 		v-for="(option, index) in filteredOptions"
		 		:key="`option_${slugify(option)}`"
		 	><button @click="oninput(option)">{{ option }}</button></li>
		 </ul>
	</div>
</template>
<script>

import Vue from 'vue'
import Input from './input'
import { isEmptyString } from '../utils/assert'
import { search, slugify } from '../utils/string'

export default Vue.component('Autocomplete', {
	components: {
		'text-input': Input,
	},

	props: {
		name: {
			type: String,
			default: '',
		},
		value: {
			type: [String, Number],
			required: true,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		placeholder: {
			type: String,
			default: '',
		},
		options: {
			type: Array,
			default: [],
		},
		bordered: {
			type: Boolean,
			default: false,
		},
		ghost: {
			type: Boolean,
			default: false,
		},
		primary: {
			type: Boolean,
			default: false,
		},
		secondary: {
			type: Boolean,
			default: false,
		},
		accent: {
			type: Boolean,
			default: false,
		},
		info: {
			type: Boolean,
			default: false,
		},
		success: {
			type: Boolean,
			default: false,
		},
		warning: {
			type: Boolean,
			default: false,
		},
		error: {
			type: Boolean,
			default: false,
		},
		xs: {
			type: Boolean,
			default: false,
		},
		sm: {
			type: Boolean,
			default: false,
		},
		md: {
			type: Boolean,
			default: false,
		},
		lg: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			isVisible: false,
			beginHide: false,
		}
	},

	mounted() {
		document.addEventListener('click', () => {
			Vue.nextTick(() => {
				if(this.beginHide) {
					this.beginHide = false
					this.isVisible = false
				}
			})
		})
	},

	computed: {
		filteredOptions() {
			if(isEmptyString(this.value)) return this.options

			return this.options.filter(option => search(option, this.value))
		},

		canShow() {
			return this.isVisible && this.filteredOptions.length > 0
		},
	},

	methods: {
		slugify(value) {
			return slugify(value)
		},

		oninput(value) {
			this.$emit('input', value)
		},

		hide() {
			this.beginHide = true
		},

		show() {
			this.isVisible = true
		},
	},
})

</script>