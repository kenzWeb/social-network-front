import {type RegisterFormValues} from '@/features/AuthForm/components/RegisterForm/models'
import {useMutation, type UseMutationOptions} from '@tanstack/react-query'
import {register} from '../requests'

export const useRegisterMutation = (
	options?: Omit<
		UseMutationOptions<void, unknown, RegisterFormValues>,
		'mutationKey' | 'mutationFn'
	>,
) => {
	return useMutation({
		mutationKey: ['register'],
		mutationFn: (data: RegisterFormValues) => register(data),
		...options,
	})
}
