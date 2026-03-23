import { Button } from '@/shared/components/ui/Button'
import { useTimeAgo } from '@/shared/hooks/useTimeAgo'
import { getUploadUrl } from '@/shared/lib/uploads'
import { cn } from '@/shared/lib/utils'
import { NotificationTypeEnum } from '@/shared/types/api'
import Image from 'next/image'
import { notificationActionText } from '../model'
import { NotificationCardItemProps } from '../types'
import styles from './NotificationCardItem.module.css'

export const NotificationCardItem = ({
	notification
}: NotificationCardItemProps) => {
	const { timeAgo } = useTimeAgo(notification.created_at || '')

	return (
		<div className={styles.wrapper}>
			<div className={styles.actor}>
				<div className={styles.avatar}>
					<Image
						src={getUploadUrl(notification.actor?.avatar_url) ?? ''}
						alt="Avatar"
						width={40}
						height={40}
						className={styles.avatarImage}
					/>
				</div>
				<div className={styles.actorInfo}>
					<h2 className={styles.actorName}>{notification.actor?.first_name}</h2>
					<div className={styles.notificationInfo}>
						<h3 className={styles.action}>
							{notification.type
								? notificationActionText[notification.type]
								: ''}
						</h3>
						<p className={styles.timeAgo}>{` . ${timeAgo}`}</p>
					</div>
				</div>
			</div>
			<div className={styles.buttons}>
				<Button
					variant="black"
					size="small"
					className={cn(
						styles.dismissButton,
						notification.type === NotificationTypeEnum.FOLLOW
							? 'w-[60%]'
							: 'w-full'
					)}
				>
					Remove
				</Button>
				{notification.type === NotificationTypeEnum.FOLLOW && (
					<>
						<Button
							variant="yellow"
							size="small"
							className={cn(
								styles.followButton,
								notification.type !== NotificationTypeEnum.FOLLOW && 'hidden'
							)}
						>
							Follow Back
						</Button>
					</>
				)}
			</div>
		</div>
	)
}
