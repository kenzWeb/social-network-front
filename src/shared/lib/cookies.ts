import Cookie from 'js-cookie'
import {EnumTokens} from '../constants/api.constants'

export const getAccessToken = () => {
	const accessToken = Cookie.get(EnumTokens.ACCESS_TOKEN)
	return accessToken ?? null
}

export const saveToken = (accessToken: string) => {
	Cookie.set(EnumTokens.ACCESS_TOKEN, accessToken, {
		domain: process.env.NEXT_PUBLIC_DOMAIN,
		expires: 7,
		sameSite: 'strict',
	})
}

export const removeToken = () => {
	Cookie.remove(EnumTokens.ACCESS_TOKEN, {
		domain: process.env.NEXT_PUBLIC_DOMAIN,
	})
}

export const getTempEmail = () => {
	const tempEmail = Cookie.get('tempEmail')
	return tempEmail ?? null
}

export const saveTempEmail = (email: string) => {
	Cookie.set('tempEmail', email, {
		domain: process.env.NEXT_PUBLIC_DOMAIN,
		expires: 1,
	})
}

export const removeTempEmail = () => {
	Cookie.remove('tempEmail', {
		domain: process.env.NEXT_PUBLIC_DOMAIN,
	})
}
