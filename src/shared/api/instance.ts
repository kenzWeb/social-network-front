import axios from 'axios'
import {API_HEADERS} from '../constants/api.constants'

export const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: API_HEADERS,
	withCredentials: true,
})
