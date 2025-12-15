import {HandlersUserStoriesResponse} from '@/shared/types/api'
import {useQuery, UseQueryOptions} from '@tanstack/react-query'
import {useMemo} from 'react'
import {getStories} from '../requests/story'

export function useGetStories(
	options?: Omit<
		UseQueryOptions<HandlersUserStoriesResponse[], unknown>,
		'queryKey' | 'queryFn'
	>,
) {
	const query = useQuery({
		queryKey: ['get-stories'],
		queryFn: getStories,
		...options,
	})

	const users = useMemo(() => {
		return query.data ?? []
	}, [query.data])

	return {
		...query,
		users,
	}
}
