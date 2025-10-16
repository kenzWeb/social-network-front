'use client'

import {AuthWrapper} from '@/entities/AuthWrapper'
import {Form} from '@/shared/components/ui/Form'
import {HEADING_REGISTER_FORM} from '@/shared/constants/base.constants'

import {AuthButtons} from '@/entities/AuthButtons'

import {RegisterFields} from '@/entities/AuthFields/components/RegisterFields'
import {OtpDialog} from '@/features/OtpDialog'
import {useRegisterMutation} from '@/shared/api/hooks'
import {onSubmit} from '@/shared/functions/onSubmit'

export function RegisterForm() {
	const {mutate, isPending, form} = useRegisterMutation()

	return (
		<AuthWrapper heading={HEADING_REGISTER_FORM}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit(mutate))}>
					<RegisterFields form={form} isPending={isPending} />
					<AuthButtons
						first='Sign Up'
						last='Sign Up with Google'
						isPending={isPending}
					/>
				</form>
			</Form>
			<OtpDialog />
		</AuthWrapper>
	)
}
