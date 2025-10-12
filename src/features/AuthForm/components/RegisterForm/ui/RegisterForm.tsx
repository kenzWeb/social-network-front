'use client'

import {AuthWrapper} from '@/entities/AuthWrapper'
import {Form} from '@/shared/components/ui/Form'
import {HEADING_REGISTER_FORM} from '@/shared/constants/base.constants'

import {AuthButtons} from '@/entities/AuthButtons/ui'
import {RegisterFields} from '@/entities/AuthFields/components/RegisterFields/ui'
import {useRegisterMutation} from '@/shared/api/hooks'
import {RegisterFormValues} from '../models'

export function RegisterForm() {
	const {mutate, isPending, form} = useRegisterMutation()

	const onSubmit = (values: RegisterFormValues) => {
		mutate(values)
	}

	return (
		<AuthWrapper heading={HEADING_REGISTER_FORM}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<RegisterFields form={form} isPending={isPending} />
					<AuthButtons
						first='Sign Up'
						last='Sign Up with Google'
						isPending={isPending}
					/>
				</form>
			</Form>
			
		</AuthWrapper>
	)
}
