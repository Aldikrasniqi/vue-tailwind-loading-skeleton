<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavigationBar from './components/ui/NavigationBar.vue'
import SectionLayout from './layouts/section.layout.vue'
</script>

<template>
	<!-- <img
			alt="Vue logo"
			class="logo"
			src="@/assets/logo.svg"
			width="125"
			height="125"
		/> -->
	<SectionLayout>
		<NavigationBar />
		<RouterView />
	</SectionLayout>
</template>
