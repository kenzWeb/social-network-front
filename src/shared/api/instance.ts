import axios from 'axios'

export const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	withCredentials: true,
})

api.defaults.headers.post['Content-Type'] = 'application/json'
