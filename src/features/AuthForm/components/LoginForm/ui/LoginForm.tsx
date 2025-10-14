'use client'

import {AuthWrapper} from '@/entities/AuthWrapper'
import {Form} from '@/shared/components/ui/Form'
import {HEADING_REGISTER_FORM} from '@/shared/constants/base.constants'

import {AuthButtons} from '@/entities/AuthButtons/'

import {LoginFields} from '@/entities/AuthFields/components/LoginFields'
import {useLoginMutation} from '@/shared/api/hooks/useLoginMutation'
import {onSubmit} from '@/shared/functions/onSubmit'

export function LoginForm() {
	const {mutate, isPending, form} = useLoginMutation()

	return (
		<AuthWrapper heading={HEADING_REGISTER_FORM}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit(mutate, form.getValues()))}>
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
