import {LoginForm} from '@/features/AuthForm/components/LoginForm'

import type {Metadata} from 'next'

export const metadata: Metadata = {
	title: 'Create Account',
	description: 'Create a new account',
}

export default function CreateAccountPage() {
	return <LoginForm />
}
