<script lang="ts" setup>
const props = defineProps<{
	title: string
	content: string
}>()
</script>
<template>
	<article class="bg-white rounded-lg shadow-md p-6 flex flex-col">
		<h3 class="text-xl font-semibold mb-2">{{ props.title }}</h3>
		<p class="text-gray-600 flex-grow">{{ props.content }}</p>
	</article>
</template>
