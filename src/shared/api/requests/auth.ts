import {auth} from '@/shared/constants/path.constants'

import type {
	Login200OneOf,
	LoginRequest,
	RefreshToken200,
	Register201,
	RegisterRequest,
	Verify2FA200,
	VerifyEmailRequest,
} from '@/shared/types/api'
import {api} from '../instance'

export const register = async (data: RegisterRequest) =>
	await api.post<Login200OneOf>(auth.register(), data).then((res) => res.data)

export const login = async (data: LoginRequest) =>
	await api.post<Register201>(auth.login(), data).then((res) => res.data)

export const verifyEmail = async (data: VerifyEmailRequest) =>
	await api
		.post<Verify2FA200>(auth.verifyEmail(), {otp: data})
		.then((res) => res.data)

export const refresh = async () =>
	await api.get<RefreshToken200>(auth.refresh()).then((res) => res.data)
