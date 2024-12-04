import axios from 'axios'

export const getPosts = async () => {
	try {
		const response = await axios.get('/posts')
		return response
	} catch (error) {
		console.error(error)
	}
}
