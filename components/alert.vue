<template>
	<div role="alert" class="alert" :class="classes"><slot /></div>
</template>
<script>

import Vue from 'vue'
import { createComponent, states } from './props'

const PREFIX = 'alert'
const CLASS_LIST = states(PREFIX)

export default Vue.component('Alert', createComponent(PREFIX, CLASS_LIST))

</script>