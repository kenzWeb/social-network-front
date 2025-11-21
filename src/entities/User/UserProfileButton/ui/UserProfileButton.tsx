import {Button} from '@/shared/components/ui/Button'
import {UserProfileButtonProps} from '../types'
import styles from './UserProfileButton.module.css'

export const UserProfileButton = (props: UserProfileButtonProps) => {
	return (
		<>
			<Button className={styles.button} variant='black' size='large'>
				<h2 className={styles.title}>My Profile</h2>
			</Button>
		</>
	)
}
