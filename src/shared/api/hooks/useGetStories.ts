import {Story} from '@/shared/types/api'
import {useQuery, UseQueryOptions} from '@tanstack/react-query'
import {getStories} from '../requests/story'

export function useGetStories(
	options?: Omit<UseQueryOptions<Story[], unknown>, 'queryKey' | 'queryFn'>,
) {
	return useQuery({
		queryKey: ['get stories'],
		queryFn: getStories,
		...options,
	})
}
