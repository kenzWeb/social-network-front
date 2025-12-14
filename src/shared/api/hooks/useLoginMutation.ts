'use client'

import {loginSchema} from '@/features/AuthForm/components/LoginForm/models'
import {IApiError} from '@/shared/interfaces/interface.api'
import {Login200OneOf, LoginRequest} from '@/shared/types/api'
import {zodResolver} from '@hookform/resolvers/zod'
import {useMutation, type UseMutationOptions} from '@tanstack/react-query'

import {useRouter} from 'next/navigation'
import {useForm} from 'react-hook-form'
import {toast} from 'react-toastify'
import {login} from '../requests'

export const useLoginMutation = (
	options?: Omit<
		UseMutationOptions<Login200OneOf, unknown, LoginRequest>,
		'mutationKey' | 'mutationFn'
	>,
) => {
	const route = useRouter()

	const form = useForm<LoginRequest>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'all',
	})

	const mutation = useMutation({
		mutationKey: ['login'],
		mutationFn: (data: LoginRequest) => login(data),
		...options,
		onSuccess: () => {
			form.reset()
			toast.success('Login successful! Welcome back.')
			route.push('/')
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
