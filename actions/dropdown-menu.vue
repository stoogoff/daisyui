<template>
	<ul tabindex="0" class="dropdown-content menu">
		<li v-for="item in items" :key="item.title">
			<nuxt-link :to="item.url">
				<d-icon v-if="item.icon" :icon="item.icon" />
				{{ item.title }}
			</nuxt-link>
		</li>
	</ul>
</template>
<script>

import Vue from 'vue'
import Icon from '../feedback/icon'

export default Vue.component('DropdownMenu', {
	props: {
		items: {
			type: Array,
			required: true,
		},
	},

	components: {
		'icon': Icon,
	},
})

</script>