<script lang="ts" setup>
import { RouterLink } from 'vue-router'
const props = defineProps<{
	id: string
	firstName: string
	lastName: string
	username: string
	email: string
	profilePicture: string
}>()
</script>

<template>
	<router-link
		to="/"
		class="flex flex-col mb-4 hover:bg-gray-50 px-2 py-1 rounded-lg"
	>
		<div class="flex gap-4 items-center justify-between w-full">
			<div class="flex gap-4 items-center w-full">
				<div
					class="w-12 h-12 flex items-center justify-center rounded-full overflow-hidden bg-primary-light"
				>
					<img
						:src="props.profilePicture"
						alt="profile"
						class="w-full h-full"
					/>
				</div>
				<div class="flex flex-col">
					<span class="text-sm">{{ props.firstName }}</span>
					<span class="text-sm text-dark-gray font-light">{{
						props.email
					}}</span>
				</div>
			</div>
			<div class="lg:min-w-[100px] flex gap-4">
				<button
					class="text-sm font-light bg-primary-light text-primary lg:px-3 lg:py-1.5 px-4 py-1 rounded block w-full hover:bg-primary hover:text-white"
				>
					Add Friend
				</button>
			</div>
		</div>
	</router-link>
</template>
