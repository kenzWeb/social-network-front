import { notification } from '@/shared/constants/path.constants'
import { InternalHandlersNotificationListResponse } from '@/shared/types/api'
import { instance } from '../instance'

export const getAllNotifications = async () => {
	return await instance
		.get<InternalHandlersNotificationListResponse>(notification.getAll())
		.then(res => res.data)
}
