import {IApiError} from '@/shared/interfaces/interface.api'

import {Register201, VerifyEmailRequest} from '@/shared/types/api'
import {useMutation, UseMutationOptions} from '@tanstack/react-query'
import {toast} from 'react-toastify'
import {verifyEmail} from '../requests'

export const useOtpMutation = (
	options?: Omit<
		UseMutationOptions<Register201, unknown, VerifyEmailRequest>,
		'mutationKey' | 'mutationFn'
	>,
) => {
	const mutation = useMutation({
		mutationKey: ['otp'],
		mutationFn: (data: VerifyEmailRequest) => verifyEmail(data),
		...options,
		onSuccess: () => {
			toast.success(
				'OTP verification successful! Your email has been verified.',
			)
		},
		onError: (err: IApiError) => {
			toast.error(
				err.response?.data.error ||
					'Email verification failed. Please try again.',
			)
		},
	})

	return {
		...mutation,
	}
}
