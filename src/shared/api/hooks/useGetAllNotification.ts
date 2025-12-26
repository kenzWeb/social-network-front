import { InternalHandlersNotificationListResponse } from '@/shared/types/api'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { getAllNotifications } from '../requests/notification'

export function useGetAllNotification(
	options?: Omit<
		UseQueryOptions<InternalHandlersNotificationListResponse[], unknown>,
		'queryKey' | 'queryFn'
	>
) {
	return useQuery({
		queryKey: ['get all notifications'],
		queryFn: getAllNotifications,
		...options
	})
}
