import { http, HttpResponse } from 'msw'
import type { User } from '@/interfaces/user'
import { users } from '@/utils/utils'

export const handlers = [
	http.get('/users', () => {
		return HttpResponse.json<User[]>(users)
	}),
]
