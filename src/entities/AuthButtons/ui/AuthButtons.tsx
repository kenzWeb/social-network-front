import {Button} from '@/shared/components/ui/Button'
import {AuthButtonsProps} from '../types'
import styles from './AuthButtons.module.css'

export const AuthButtons = ({first, last, isPending}: AuthButtonsProps) => {
	return (
		<div className={styles.wrapper}>
			<Button
				className={styles.button}
				type='submit'
				disabled={isPending}
				variant='black'
				color=''
				size='large'
			>
				{first}
			</Button>
			<Button
				className={styles.button}
				type='submit'
				disabled={isPending}
				variant='gray'
				size='large'
			>
				{last}
			</Button>
		</div>
	)
}
