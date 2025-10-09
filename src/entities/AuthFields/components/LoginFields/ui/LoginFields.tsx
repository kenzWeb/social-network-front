import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/shared/components/ui/Form'
import {Input} from '@/shared/components/ui/Input'
import {FieldsLabels, FieldsPlaceholders} from '../constants'
import {LoginFieldsProps} from '../types'
import styles from './LoginFields.module.css'

export const LoginFields = ({form, isPending}: LoginFieldsProps) => {
	return (
		<div className={styles.fields}>
			<FormField
				control={form.control}
				name='email'
				render={({field}) => (
					<FormItem>
						<FormLabel className={styles.label}>{FieldsLabels.email}</FormLabel>
						<FormControl>
							<Input
								className={styles.input}
								placeholder={FieldsPlaceholders.email}
								disabled={isPending}
								{...field}
							/>
						</FormControl>

						<FormMessage className={styles.message} />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name='password'
				render={({field}) => (
					<FormItem>
						<FormLabel className={styles.label}>
							{FieldsLabels.password}
						</FormLabel>
						<FormControl>
							<Input
								className={styles.input}
								placeholder={FieldsPlaceholders.password}
								disabled={isPending}
								{...field}
							/>
						</FormControl>
						<FormMessage className={styles.message} />
					</FormItem>
				)}
			/>
		</div>
	)
}
