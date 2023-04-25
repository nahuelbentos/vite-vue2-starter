<script lang="ts" setup>
import { computed, ref } from 'vue'

const props = defineProps({
	count: {
		type: Number,
		required: true,
		default: 0
	}
})
const changes = ref(0)
const showList = ref(false)

const emojis = computed(() => {
	changes.value += 1
	return Array.from({ length: props.count }).fill('📮')
})

function onClick() {
	showList.value = !showList.value
}
</script>

<template>
	<div>
		<p>Changes: {{ changes }}</p>
		<button @click="onClick" />
		<p v-if="showList">
			<span v-for="(emoji, index) in emojis" :key="index">{{ emoji }}</span>
		</p>
	</div>
</template>
