import {RegisterFormValues} from '@/features/AuthForm/components/RegisterForm/models'
import {UseFormReturn} from 'react-hook-form'

export interface RegisterFieldsProps {
	form: UseFormReturn<RegisterFormValues, undefined>
}
