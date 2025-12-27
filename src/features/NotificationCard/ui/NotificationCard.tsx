'use client'

import { useGetAllNotification } from '@/shared/api/hooks/useGetAllNotification'
import styles from './NotificationCard.module.css'

export const NotificationCard = () => {
	const { notifications } = useGetAllNotification()
	console.log(notifications)

	return (
		<div className={styles.wrapper}>
			{/* {notifications?.map(notification => (
				<NotificationCardItem
					key={notification.id}
					notification={notification}
				/>
			))} */}
		</div>
	)
}
