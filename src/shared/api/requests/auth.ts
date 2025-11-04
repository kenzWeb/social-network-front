import {auth} from '@/shared/constants/path.constants'

import {saveToken} from '@/shared/lib/cookies'
import type {
	Login200OneOf,
	LoginRequest,
	RefreshToken200,
	Register201,
	RegisterRequest,
	VerifyEmail200,
	VerifyEmailRequest,
} from '@/shared/types/api'
import {api} from '../instance'

export const register = async (data: RegisterRequest) =>
	await api.post<Register201>(auth.register(), data).then((res) => res.data)

export const login = async (data: LoginRequest) =>
	await api.post<Login200OneOf>(auth.login(), data).then((res) => {
		if (res.data.token) saveToken(res.data.token)

		return res.data
	})

export const verifyEmail = async (data: VerifyEmailRequest) =>
	await api
		.post<VerifyEmail200>(auth.verifyEmail(), data)
		.then((res) => res.data)

export const refresh = async () =>
	await api.post<RefreshToken200>(auth.refresh()).then((res) => {
		if (res.data.token) saveToken(res.data.token)
	})
