<template>
	<div class="breadcrumbs">
		<ul>
			<li v-for="item in items" :key="item.title">
				<nuxt-link :to="item.url" v-if="item.url">
					<icon v-if="item.icon" :icon="item.icon" />
					{{ item.title }}
				</nuxt-link>
				<span v-else class="inline-flex gap-2 items-center">
					<icon v-if="item.icon" :icon="item.icon" />
					{{ item.title }}			
				</span>
			</li>
		</ul>
	</div>
</template>
<script>

import Vue from 'vue'
import Icon from '../feedback/icon'

export default Vue.component('Breadcrumbs', {
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