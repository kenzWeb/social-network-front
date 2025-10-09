import {
	registerSchema,
	type RegisterFormValues,
} from '@/features/AuthForm/components/RegisterForm/models'
import {zodResolver} from '@hookform/resolvers/zod'
import {useMutation, type UseMutationOptions} from '@tanstack/react-query'
import {useForm} from 'react-hook-form'
import {register} from '../requests'

export const useRegisterMutation = (
	options?: Omit<
		UseMutationOptions<void, unknown, RegisterFormValues>,
		'mutationKey' | 'mutationFn'
	>,
) => {
	const form = useForm<RegisterFormValues>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			username: '',
			email: '',
			password: '',
			first_name: '',
			last_name: '',
		},
		mode: 'onBlur',
	})

	const mutation = useMutation({
		mutationKey: ['register'],
		mutationFn: (data: RegisterFormValues) => register(data),
		...options,
		onSuccess: (...args) => {
			form.reset()
			options?.onSuccess?.(...args)
		},
		onError: (...args) => {
			options?.onError?.(...args)
		},
	})

	return {
		...mutation,
		form,
	}
}
