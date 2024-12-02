import axios from 'axios'

export const getUsers = async () => {
	try {
		const response = await axios.get('/users')
		return response
	} catch (error) {
		console.error(error)
	}
}
