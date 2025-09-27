import {LoginForm} from '@/features/AuthForm/components'
import {HEADING_AUTH_FORM} from '@/shared/constants/base.constants'
import {AuthWrapper} from '@/widgets/AuthWrapper'

import type {Metadata} from 'next'

export const metadata: Metadata = {
	title: 'Create Account',
	description: 'Create a new account',
}

export default function CreateAccountPage() {
	return (
		<AuthWrapper heading={HEADING_AUTH_FORM}>
			<LoginForm />
		</AuthWrapper>
	)
}
