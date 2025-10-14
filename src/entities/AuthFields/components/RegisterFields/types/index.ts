import {RegisterFormValues} from '@/shared/models'
import {UseFormReturn} from 'react-hook-form'

export interface RegisterFieldsProps {
	form: UseFormReturn<RegisterFormValues, undefined>
	isPending?: boolean
}
