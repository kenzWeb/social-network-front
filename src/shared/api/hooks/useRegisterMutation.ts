import {
	registerSchema,
	type RegisterFormValues,
} from '@/features/AuthForm/components/RegisterForm/models'
import {IApiError} from '@/shared/interfaces/interface.api'
import {useDialogStore} from '@/shared/stores/dialogStore'
import {zodResolver} from '@hookform/resolvers/zod'
import {useMutation, type UseMutationOptions} from '@tanstack/react-query'
import {useForm} from 'react-hook-form'
import {toast} from 'react-toastify'
import {register} from '../requests'

export const useRegisterMutation = (
	options?: Omit<
		UseMutationOptions<void, unknown, RegisterFormValues>,
		'mutationKey' | 'mutationFn'
	>,
) => {
	const {open} = useDialogStore()

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
		onSuccess: () => {
			form.reset()
			toast.success(
				'Registration successful! Please check your email to verify your account.',
			)
			open()
		},
		onError: (err: IApiError) => {
			toast.error(
				err.response?.data.error || 'Registration failed. Please try again.',
			)
		},
	})

	return {
		...mutation,
		form,
	}
}
