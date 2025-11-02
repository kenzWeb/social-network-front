import axios from 'axios'
import {API_OPTIONS} from '../constants/api.constants'
import {getAccessToken, removeToken} from '../lib/cookies'
import {errorCatch} from '../lib/utils'
import {refresh} from './requests'

export const api = axios.create(API_OPTIONS)
export const instance = axios.create(API_OPTIONS)

instance.interceptors.request.use((config) => {
	const accessToken = getAccessToken()

	if (accessToken && config.headers) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

instance.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalRequest = error.config

		if (
			error.response.status === 401 ||
			errorCatch(error) === 'jwt expired' ||
			errorCatch(error) === 'jwt must be provided' ||
			errorCatch(error) === 'invalid token' ||
			errorCatch(error) === 'Invalid refresh token' ||
			(errorCatch(error) === 'Missing refresh token' && !originalRequest._retry)
		) {
			originalRequest._retry = true

			try {
				await refresh()
				return instance.request(originalRequest)
			} catch (error) {
				if (
					errorCatch(error) === 'jwt expired' ||
					errorCatch(error) === 'jwt must be provided' ||
					errorCatch(error) === 'invalid token' ||
					errorCatch(error) === 'Missing refresh token' ||
					errorCatch(error) === 'Invalid refresh token'
				) {
					removeToken()
				}
			}
		}

		throw error
	},
)
