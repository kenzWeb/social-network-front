'use client'

import {AuthWrapper} from '@/entities/AuthWrapper'
import {Form} from '@/shared/components/ui/Form'
import {HEADING_REGISTER_FORM} from '@/shared/constants/base.constants'

import {AuthButtons} from '@/entities/AuthButtons/ui'
import {LoginFields} from '@/entities/AuthFields/components/LoginFields/ui'
import {useLoginMutation} from '@/shared/api/hooks/useLoginMutation'
import {LoginFormValues} from '../models'

export function LoginForm() {
	const {mutate, isPending, form} = useLoginMutation()

	const onSubmit = (values: LoginFormValues) => {
		mutate(values)
	}

	return (
		<AuthWrapper heading={HEADING_REGISTER_FORM}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<LoginFields form={form} isPending={isPending} />
					<AuthButtons
						first='Sign In'
						last='Sign In with Google'
						isPending={isPending}
					/>
				</form>
			</Form>
		</AuthWrapper>
	)
}
