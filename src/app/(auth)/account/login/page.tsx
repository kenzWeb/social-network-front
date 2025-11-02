import {LoginForm} from '@/features/AuthForm/components/LoginForm'

import type {Metadata} from 'next'

export const metadata: Metadata = {
	title: 'Login Account',
	description: 'Login to your account',
}

export default function LoginAccountPage() {
	return <LoginForm />
}
