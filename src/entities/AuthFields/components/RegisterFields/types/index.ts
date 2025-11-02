import {RegisterRequest} from '@/shared/types/api'
import {UseFormReturn} from 'react-hook-form'

export interface RegisterFieldsProps {
	form: UseFormReturn<RegisterRequest, undefined>
	isPending?: boolean
}
