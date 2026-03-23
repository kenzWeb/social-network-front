import {NotificationTypeEnum} from '@/shared/types/api'

export const notificationActionText: Record<NotificationTypeEnum, string> = {
	[NotificationTypeEnum.FOLLOW]: 'followed you',
	[NotificationTypeEnum.LIKE]: 'liked your post',
	[NotificationTypeEnum.COMMENT]: 'commented on your post',
}
