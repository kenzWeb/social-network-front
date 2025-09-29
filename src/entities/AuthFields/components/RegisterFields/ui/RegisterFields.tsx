import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/shared/components/ui/Form'
import {Input} from '@/shared/components/ui/Input'
import {FieldsLabels, FieldsPlaceholders} from '../constants'
import {RegisterFieldsProps} from '../types'
import styles from './RegisterFields.module.css'

export const RegisterFields = ({form}: RegisterFieldsProps) => {
	return (
		<div className={styles.fields}>
			<FormField
				control={form.control}
				name='username'
				render={({field}) => (
					<FormItem>
						<FormLabel className={styles.label}>
							{FieldsLabels.username}
						</FormLabel>
						<FormControl>
							<Input
								className={styles.input}
								placeholder={FieldsPlaceholders.username}
								{...field}
							/>
						</FormControl>

						<FormMessage className={styles.message} />
					</FormItem>
				)}
			/>
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
						<FormLabel className={styles.label}>{FieldsLabels.password}</FormLabel>
						<FormControl>
							<Input
								className={styles.input}
								placeholder={FieldsPlaceholders.password}
								{...field}
							/>
						</FormControl>
						<FormMessage className={styles.message} />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name='first_name'
				render={({field}) => (
					<FormItem>
						<FormLabel className={styles.label}>
							{FieldsLabels.first_name}
						</FormLabel>
						<FormControl>
							<Input
								className={styles.input}
								placeholder={FieldsPlaceholders.first_name}
								{...field}
							/>
						</FormControl>

						<FormMessage className={styles.message} />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name='last_name'
				render={({field}) => (
					<FormItem>
						<FormLabel className={styles.label}>
							{FieldsLabels.last_name}
						</FormLabel>
						<FormControl>
							<Input
								className={styles.input}
								placeholder={FieldsPlaceholders.last_name}
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
