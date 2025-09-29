import {RegisterForm} from '@/features/AuthForm/components/RegisterForm'

import type {Metadata} from 'next'

export const metadata: Metadata = {
	title: 'Create Account',
	description: 'Create a new account',
}

export default function CreateAccountPage() {
	return <RegisterForm />
}
