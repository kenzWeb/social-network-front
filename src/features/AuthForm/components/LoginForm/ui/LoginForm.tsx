import {Form} from '@/shared/components/ui/Form'
import {HEADING_AUTH_FORM} from '@/shared/constants/base.constants'
import {AuthWrapper} from '@/widgets/AuthWrapper'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import {LoginFormValue, loginSchema} from '../models'

export function LoginForm() {
	const form = useForm<LoginFormValue>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'onBlur',
	})

	const onSubmit = (values: LoginFormValue) => {
		console.log(values)
	}

	return (
		<AuthWrapper heading={HEADING_AUTH_FORM}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}></form>
			</Form>
		</AuthWrapper>
	)
}
