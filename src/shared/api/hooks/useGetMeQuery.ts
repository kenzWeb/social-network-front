import {type UseQueryOptions, useQuery} from '@tanstack/react-query'

import {User} from '@/shared/types/api'
import {getMe} from '../requests'

export function useGetMeQuery(
	options?: Omit<UseQueryOptions<User, unknown>, 'queryKey' | 'queryFn'>,
) {
	return useQuery({
		queryKey: ['get me'],
		queryFn: getMe,
		...options,
	})
}
