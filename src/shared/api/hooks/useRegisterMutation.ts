import {IApiError} from '@/shared/interfaces/interface.api'

import {registerSchema} from '@/features/AuthForm/components/RegisterForm/models'
import {saveTempEmail} from '@/shared/lib/cookies'
import {useDialogStore} from '@/shared/stores/dialogStore'
import {Register201, RegisterRequest} from '@/shared/types/api'
import {zodResolver} from '@hookform/resolvers/zod'
import {useMutation, type UseMutationOptions} from '@tanstack/react-query'
import {useForm} from 'react-hook-form'
import {toast} from 'react-toastify'
import {register} from '../requests'

export const useRegisterMutation = (
	options?: Omit<
		UseMutationOptions<Register201, unknown, RegisterRequest>,
		'mutationKey' | 'mutationFn'
	>,
) => {
	const {open} = useDialogStore()

	const form = useForm<RegisterRequest>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			username: '',
			email: '',
			password: '',
			first_name: '',
			last_name: '',
		} as RegisterRequest,
		mode: 'all',
	})

	const mutation = useMutation({
		mutationKey: ['register'],
		mutationFn: (data: RegisterRequest) => register(data),
		...options,
		onSuccess: () => {
			toast.success(
				'Registration successful! Please check your email to verify your account.',
			)
			saveTempEmail(form.getValues().email)
			form.reset()

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
