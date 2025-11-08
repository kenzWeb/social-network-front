import {UserProfileCard} from '@/entities/User'
import styles from './UserProfileSidebar.module.css'

export const UserProfileSidebar = () => {
	return (
		<aside className={styles.wrapper}>
			<UserProfileCard />
		</aside>
	)
}