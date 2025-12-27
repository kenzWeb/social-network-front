import { NotificationCard } from '@/features/NotificationCard'
import styles from './RecentActivitySidebar.module.css'

export const RecentActivitySidebar = () => {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Recent Activity</h2>
			<NotificationCard />
		</div>
	)
}
