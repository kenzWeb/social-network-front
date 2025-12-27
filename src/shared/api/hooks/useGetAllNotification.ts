import { InternalHandlersNotificationListResponse } from '@/shared/types/api'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { useMemo } from 'react'
import { getAllNotifications } from '../requests/notification'

export function useGetAllNotification(
	options?: Omit<
		UseQueryOptions<InternalHandlersNotificationListResponse[], unknown>,
		'queryKey' | 'queryFn'
	>
) {
	const data = useQuery({
		queryKey: ['get all notifications'],
		queryFn: getAllNotifications,
		...options
	})

	const notifications = useMemo(() => data.data ?? [], [data.data])

	return { data, notifications }
}
