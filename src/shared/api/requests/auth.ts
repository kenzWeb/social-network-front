import {RegisterFormValues} from '@/features/AuthForm/components/RegisterForm/models'
import {auth} from '@/shared/constants/path.constants'
import {api} from '../instance'

export const register = async (data: RegisterFormValues) =>
	await api.post(auth.register(), data).then((res) => res.data)
