<template>
	<div role="tabpanel" class="tab-content py-4">
		<slot />
	</div>
</template>
<script>

import Vue from 'vue'

export default Vue.component('TabContent', {})

</script>