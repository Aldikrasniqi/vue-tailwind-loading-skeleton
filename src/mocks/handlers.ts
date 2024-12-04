import { http, HttpResponse } from 'msw'
import type { User } from '@/interfaces/user'
import { posts, users } from '@/utils/utils'
import type { Post } from '@/interfaces/post'

export const handlers = [
	http.get('/users', () => {
		return HttpResponse.json<User[]>(users)
	}),

	http.get('/posts', () => {
		return HttpResponse.json<Post[]>(posts)
	}),
]
