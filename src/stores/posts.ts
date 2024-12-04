import { defineStore } from 'pinia'
import type { Post } from '@/interfaces/post'
import { getPosts } from '@/services/post.service'

export const usePostsStore = defineStore('posts', {
	state: () => ({
		posts: [] as Post[],
		loadPosts: false,
	}),
	actions: {
		async fetchPosts() {
			this.loadPosts = true
			const resp = await getPosts()
			if (resp?.data) {
				this.posts = resp.data
				setTimeout(() => {
					this.loadPosts = false
				}, 2000)
			} else {
				this.loadPosts = false
			}
		},
	},
})
