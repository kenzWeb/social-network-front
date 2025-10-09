import {RegisterFormValues} from '@/features/AuthForm/components/RegisterForm/models'
import {auth} from '@/shared/constants/path.constants'
import {api} from '../instance'

export const register = async (data: RegisterFormValues) =>
	await api.post(auth.register(), data).then((res) => res.data)

export const login = async (email: string, password: string) =>
	await api.post(auth.login(), {email, password}).then((res) => res.data)

export const refresh = async () =>
	await api.post(auth.refresh()).then((res) => res.data)

export const verifyEmail = async (token: string) =>
	await api.post(auth.verifyEmail(), {token}).then((res) => res.data)

export const resendVerifyEmail = async (email: string) =>
	await api.post(auth.resendVerifyEmail(), {email}).then((res) => res.data)

export const verify2FA = async (code: string) =>
	await api.post(auth.verify2FA(), {code}).then((res) => res.data)

export const request2FA = async () =>
	await api.post(auth.request2FA()).then((res) => res.data)

export const toggle2FA = async (enable: boolean, code: string) =>
	await api.post(auth.toggle2FA(), {enable, code}).then((res) => res.data)
