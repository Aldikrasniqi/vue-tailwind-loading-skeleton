<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Post {
	id: number
	title: string
	content: string
}

const posts = ref<Post[]>([])
const isLoading = ref(true)

const fetchPosts = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000))
	posts.value = Array.from({ length: 10 }, (_, i) => ({
		id: i + 1,
		title: `Post ${i + 1}`,
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	}))
	isLoading.value = false
}

onMounted(() => {
	fetchPosts()
})
</script>

<template>
	<main class="container mx-auto px-4 py-8">
		<h1 class="text-4xl font-bold mb-6 text-center">Loading Skeleton Demo</h1>

		<section class="mb-12">
			<h2 class="text-2xl font-semibold mb-4">About This App</h2>
			<p class="text-gray-700 leading-relaxed">
				In frontend engineering, loading states are a common problem that we all
				face in our projects. Loading states are important because they provide
				feedback to the user that something is happening in the background. This
				is especially important when you have a slow internet connection or when
				you are loading a lot of data. This typically happens when you are
				fetching data from an API or when you are rendering a lot of components
				on the screen. In this demo, we've set up a Vue project with Tailwind
				CSS and a mock API to fetch data for testing purposes. Below, you'll see
				examples of managing loading skeleton components and state in a Vue
				Tailwind project.
			</p>
		</section>

		<section>
			<h2 class="text-2xl font-semibold mb-4">
				Masonry Layout with Loading Skeletons
			</h2>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				<template v-if="isLoading">
					<div
						v-for="n in 9"
						:key="n"
						class="bg-white rounded-lg shadow-md p-6 flex flex-col animate-pulse"
					>
						<div class="w-3/4 h-4 bg-gray-300 rounded mb-4"></div>
						<div class="w-full h-4 bg-gray-300 rounded mb-2"></div>
						<div class="w-5/6 h-4 bg-gray-300 rounded mb-2"></div>
						<div class="w-3/4 h-4 bg-gray-300 rounded"></div>
					</div>
				</template>
				<template v-else>
					<article
						v-for="post in posts"
						:key="post.id"
						class="bg-white rounded-lg shadow-md p-6 flex flex-col"
					>
						<h3 class="text-xl font-semibold mb-2">{{ post.title }}</h3>
						<p class="text-gray-600 flex-grow">{{ post.content }}</p>
					</article>
				</template>
			</div>
		</section>
	</main>
</template>
