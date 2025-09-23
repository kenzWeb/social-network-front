import AuthWrapper from '@/widgets/AuthWrapper/ui/AuthWrapper'
import type {Metadata} from 'next'

export const metadata: Metadata = {
	title: 'Create Account',
	description: 'Create a new account',
}

export default function CreateAccountPage() {
	return <AuthWrapper>Create Account Page</AuthWrapper>
}
