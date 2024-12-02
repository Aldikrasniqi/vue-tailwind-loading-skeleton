<script setup lang="ts">
import UserList from '@/components/ui/users/UserList.vue'
import UsersLoadingSkeleton from '@/components/ui/users/UsersLoadingSkeleton.vue'
import { useUsersStore } from '@/stores/users'
import { onMounted } from 'vue'
const store = useUsersStore()

onMounted(async () => {
	store.fetchUsers()
})
</script>

<template>
	<main>
		<div>
			<h1 class="md:py-6 px-3 text-2xl font-semibold">Users</h1>
			<div v-if="store.loadUsers">
				<UsersLoadingSkeleton :numberOfSkeletons="store.users.length" />
			</div>
			<div v-for="user in store.users" v-if="!store.loadUsers" :key="user.id">
				<UserList
					:id="user.id"
					:firstName="user.firstName"
					:lastName="user.lastName"
					:username="user.username"
					:email="user.email"
					:profilePicture="user.profilePicture"
				/>
			</div>
		</div>
	</main>
</template>
