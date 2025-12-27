import { getUploadUrl } from '@/shared/lib/uploads'
import { NotificationTypeEnum } from '@/shared/types/api'
import Image from 'next/image'
import { NotificationCardItemProps } from '../types'
import styles from './NotificationCardItem.module.css'

export const NotificationCardItem = ({
	notification
}: NotificationCardItemProps) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.actor}>
				<div className={styles.avatar}>
					<Image
						src={getUploadUrl(notification.actor?.avatar_url) ?? ''}
						alt="Avatar"
						width={40}
						height={40}
					/>
				</div>
				<div className={styles.actorInfo}>
					<h2 className={styles.actorName}>{notification.actor?.first_name}</h2>
					<h3>
						{notification.type === NotificationTypeEnum.FOLLOW
							? 'followed on you'
							: ''}

						<p></p>
					</h3>
				</div>
			</div>
			<div></div>
		</div>
	)
}
