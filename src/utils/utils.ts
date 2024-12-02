import type { User } from '@/interfaces/user'

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
		'https://media.istockphoto.com/id/1338134319/photo/portrait-of-young-indian-businesswoman-or-school-teacher-pose-indoors.jpg?s=612x612&w=0&k=20&c=Dw1nKFtnU_Bfm2I3OPQxBmSKe9NtSzux6bHqa9lVZ7A=',
		'https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp',
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
