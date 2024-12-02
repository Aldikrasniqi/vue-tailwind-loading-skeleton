import type { User } from '@/interfaces/user'
import { defineStore } from 'pinia'
import { getUsers } from '@/services/user.service'
export const useUsersStore = defineStore('users', {
	state: () => ({
		users: [] as User[],
		loadUsers: false,
	}),
	actions: {
		async fetchUsers() {
			this.loadUsers = true
			const resp = await getUsers()
			if (resp?.data) {
				this.users = resp.data
				setTimeout(() => {
					this.loadUsers = false
				}, 2000)
			} else {
				this.loadUsers = false
			}
		},
	},
})
