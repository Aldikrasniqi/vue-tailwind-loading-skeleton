<script lang="ts" setup>
const props = defineProps<{
	numberOfSkeletons: number
}>()
</script>
<template>
	<div
		v-for="n in props.numberOfSkeletons"
		:key="n"
		class="bg-white rounded-lg shadow-md p-6 flex flex-col animate-pulse"
	>
		<div class="w-3/4 h-4 bg-gray-300 rounded mb-4"></div>
		<div class="w-full h-4 bg-gray-300 rounded mb-2"></div>
		<div class="w-5/6 h-4 bg-gray-300 rounded mb-2"></div>
		<div class="w-3/4 h-4 bg-gray-300 rounded"></div>
	</div>
</template>
