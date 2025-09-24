import {HEADING_AUTH_FORM} from '@/features/AuthForm/components/RegisterForm/constants'
import AuthWrapper from '@/widgets/AuthWrapper/ui/AuthWrapper'
import type {Metadata} from 'next'

export const metadata: Metadata = {
	title: 'Create Account',
	description: 'Create a new account',
}

export default function CreateAccountPage() {
	return (
		<AuthWrapper heading={HEADING_AUTH_FORM}>Create Account Page</AuthWrapper>
	)
}
