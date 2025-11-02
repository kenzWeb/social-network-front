import {LoginRequest} from '@/shared/types/api'
import {UseFormReturn} from 'react-hook-form'

export interface LoginFieldsProps {
	form: UseFormReturn<LoginRequest, undefined>
	isPending?: boolean
}
