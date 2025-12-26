import { InternalHandlersNotificationListResponse } from '@/shared/types/api'
import { instance } from '../instance'

export const getAllNotifications = async () => {
	return await instance
		.get<InternalHandlersNotificationListResponse[]>(`/notification`)
		.then(res => res.data)
}
