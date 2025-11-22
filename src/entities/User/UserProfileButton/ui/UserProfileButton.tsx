import {Button} from '@/shared/components/ui/Button'
import styles from './UserProfileButton.module.css'

export const UserProfileButton = () => {
	return (
		<>
			<Button className={styles.button} variant='black' size='large'>
				<h2 className={styles.title}>My Profile</h2>
			</Button>
		</>
	)
}
