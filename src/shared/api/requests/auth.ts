import {auth} from '@/shared/constants/path.constants'

import {api} from '../instance'
import { LoginFormValues } from '@/features/AuthForm/components/LoginForm/models'
import { RegisterFormValues } from '@/features/AuthForm/components/RegisterForm/models'

export const register = async (data: RegisterFormValues) =>
	await api.post(auth.register(), data).then((res) => res.data)

export const login = async (data: LoginFormValues) =>
	await api.post(auth.login(), data).then((res) => res.data)

export const verifyEmail = async (data: string) =>
	await api.post(auth.verifyEmail(), {otp: data}).then((res) => res.data)
