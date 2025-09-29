'use client'

import {Form} from '@/shared/components/ui/Form'
import {HEADING_REGISTER_FORM} from '@/shared/constants/base.constants'
import {AuthWrapper} from '@/widgets/AuthWrapper'
import {zodResolver} from '@hookform/resolvers/zod'

import {AuthButtons} from '@/entities/AuthButtons/ui'
import {RegisterFields} from '@/entities/AuthFields/components/RegisterFields/ui'
import {useForm} from 'react-hook-form'
import {RegisterFormValue, registerSchema} from '../models'

export function RegisterForm() {
	const form = useForm<RegisterFormValue>({
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

	const onSubmit = (values: RegisterFormValue) => {
		console.log(values)
	}

	return (
		<AuthWrapper heading={HEADING_REGISTER_FORM}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<RegisterFields form={form} />
					<AuthButtons />
				</form>
			</Form>
		</AuthWrapper>
	)
}
