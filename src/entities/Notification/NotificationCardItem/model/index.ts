import {NotificationTypeEnum} from '@/shared/types/api'

export const notificationActionText: Record<NotificationTypeEnum, string> = {
	[NotificationTypeEnum.FOLLOW]: 'Followed you',
	[NotificationTypeEnum.LIKE]: 'Liked your post',
	[NotificationTypeEnum.COMMENT]: 'Commented on your post',
}
