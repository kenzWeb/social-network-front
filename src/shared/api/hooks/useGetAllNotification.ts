import { InternalHandlersNotificationListResponse } from '@/shared/types/api'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { getAllNotifications } from '../requests/notification'

export function useGetAllNotification(
	options?: Omit<
		UseQueryOptions<InternalHandlersNotificationListResponse, unknown>,
		'queryKey' | 'queryFn'
	>
) {
	const data = useQuery({
		queryKey: ['get all notifications'],
		queryFn: getAllNotifications,
		...options
	})

	const notifications = data.data?.notifications?.map(item => item)

	return { data, notifications }
}
