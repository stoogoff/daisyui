<template>
	<div class="join" :class="classes"><slot /></div>
</template>
<script>

import Vue from 'vue'
import { createComponent } from './props'

const CLASS_LIST = [
	'join-vertical',
	'join-horizontal',
]

export default Vue.component('Join', createComponent('join', CLASS_LIST))

</script>