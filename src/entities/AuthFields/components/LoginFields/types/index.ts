import {LoginFormValues} from '@/shared/models'
import {UseFormReturn} from 'react-hook-form'

export interface LoginFieldsProps {
	form: UseFormReturn<LoginFormValues, undefined>
	isPending?: boolean
}
