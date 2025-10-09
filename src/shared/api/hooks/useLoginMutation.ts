import {
	LoginFormValues,
	loginSchema,
} from '@/features/AuthForm/components/LoginForm/models'
import {IApiError} from '@/shared/interfaces/interface.api'
import {zodResolver} from '@hookform/resolvers/zod'
import {useMutation, type UseMutationOptions} from '@tanstack/react-query'
import {useForm} from 'react-hook-form'
import {toast} from 'react-toastify'
import {login} from '../requests'

export const useLoginMutation = (
	options?: Omit<
		UseMutationOptions<void, unknown, LoginFormValues>,
		'mutationKey' | 'mutationFn'
	>,
) => {
	const form = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'onBlur',
	})

	const mutation = useMutation({
		mutationKey: ['login'],
		mutationFn: (data: LoginFormValues) => login(data),
		...options,
		onSuccess: () => {
			form.reset()
			toast.success('Login successful! Welcome back.')
		},
		onError: (err: IApiError) => {
			toast.error(err.response?.data.error || 'Login failed. Please try again.')
		},
	})

	return {
		...mutation,
		form,
	}
}
