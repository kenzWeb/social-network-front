import {useEffect, useState} from 'react'
import {getAccessToken} from '../lib/cookies'

export const useAuth = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false)

	useEffect(() => {
		const token = getAccessToken()

		setIsAuthenticated(Boolean(token && typeof token !== 'undefined'))
	}, [])

	return {isAuthenticated}
}
