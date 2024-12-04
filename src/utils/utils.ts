import type { User } from '@/interfaces/user'
import type { Post } from '@/interfaces/post'
function getRandomId(): string {
	const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
	return Array.from(
		{ length: 36 },
		() => chars[Math.floor(Math.random() * chars.length)]
	).join('')
}

function getRandomName(): string {
	const names = [
		'John',
		'Jane',
		'Alice',
		'Bob',
		'Charlie',
		'Maverick',
		'Kar',
		'Marx',
	]
	return names[Math.floor(Math.random() * names.length)]
}

function getRandomUsername(firstName: string, lastName: string): string {
	return `${firstName.toLowerCase()}_${lastName.toLowerCase()}${Math.floor(
		Math.random() * 100
	)}`
}

function getRandomEmail(firstName: string, lastName: string): string {
	return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`
}

function getRandomProfilePicture(): string {
	const pictures = [
		'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrKxfjTf49GAtu0PpFXK7mKBgqyJ5MfJCgQw&s',
	]
	return pictures[Math.floor(Math.random() * pictures.length)]
}

function generateUsers(count: number): User[] {
	return Array.from({ length: count }, () => {
		const firstName = getRandomName()
		const lastName = getRandomName()
		return {
			id: getRandomId(),
			firstName,
			lastName,
			username: getRandomUsername(firstName, lastName),
			email: getRandomEmail(firstName, lastName),
			profilePicture: getRandomProfilePicture(),
		}
	})
}

export const users = generateUsers(10)

function getRandomTitle(): string {
	const titles = [
		'Hello World',
		'How to learn React',
		'Vue 3 is here',
		'Angular 12 is out',
		'Why Svelte is the best',
		'What is Deno',
		'Next.js vs Nuxt.js',
		'Why GraphQL is the future',
	]
	return titles[Math.floor(Math.random() * titles.length)]
}

function getRandomContent(): string {
	const contents = [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl a nunc ultrices tincidunt. Nulla facilisi. Nullam euismod, nunc at aliquet tristique, nunc eros aliquet nisi, nec fermentum orci nisl nec libero. Nulla facilisi. Nullam euismod, nunc at aliquet tristique, nunc eros aliquet nisi, nec fermentum orci nisl nec libero.',
		'Sed ac nisl a nunc ultrices tincidunt. Nulla facilisi. Nullam euismod, nunc at aliquet tristique, nunc eros aliquet nisi, nec fermentum orci nisl nec libero. Nulla facilisi. Nullam euismod, nunc at aliquet tristique, nunc eros aliquet nisi, nec fermentum orci nisl nec libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	]
	return contents[Math.floor(Math.random() * contents.length)]
}

function generatePosts(count: number): Post[] {
	return Array.from({ length: count }, () => {
		return {
			id: getRandomId(),
			title: getRandomTitle(),
			content: getRandomContent(),
		}
	})
}

export const posts = generatePosts(10)
