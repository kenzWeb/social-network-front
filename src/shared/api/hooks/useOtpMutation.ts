import {IApiError} from '@/shared/interfaces/interface.api'

import {removeTempEmail} from '@/shared/lib/cookies'
import {useDialogStore} from '@/shared/stores/dialogStore'
import {VerifyEmail200, VerifyEmailRequest} from '@/shared/types/api'
import {useMutation, UseMutationOptions} from '@tanstack/react-query'
import {useRouter} from 'next/navigation'
import {toast} from 'react-toastify'
import {verifyEmail} from '../requests'

export const useOtpMutation = (
	options?: Omit<
		UseMutationOptions<VerifyEmail200, unknown, VerifyEmailRequest>,
		'mutationKey' | 'mutationFn'
	>,
) => {
	const {close} = useDialogStore()
	const route = useRouter()

	const mutation = useMutation({
		mutationKey: ['otp'],
		mutationFn: (data: VerifyEmailRequest) => verifyEmail(data),
		...options,
		onSuccess: () => {
			close()
			route.push('/account/login')
			toast.success(
				'OTP verification successful! Your email has been verified.',
			)
			removeTempEmail()
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
