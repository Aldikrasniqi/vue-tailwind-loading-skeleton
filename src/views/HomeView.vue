<script setup lang="ts">
import PostCard from '@/components/ui/posts/PostCard.vue'
import PostLoadingSkeleton from '@/components/ui/posts/PostLoadingSkeleton.vue'
import { usePostsStore } from '@/stores/posts'
import { onMounted } from 'vue'

const store = usePostsStore()

onMounted(() => {
	store.fetchPosts()
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
				<template v-if="store.loadPosts">
					<PostLoadingSkeleton :numberOfSkeletons="store.posts.length" />
				</template>
				<template v-else>
					<PostCard
						v-for="post in store.posts"
						:key="post.id"
						:title="post.title"
						:content="post.content"
					/>
				</template>
			</div>
		</section>
	</main>
</template>
