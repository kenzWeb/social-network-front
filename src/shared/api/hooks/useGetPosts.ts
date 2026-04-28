import { Post } from '@/shared/types/api'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { getPosts } from '../requests/post'

export function useGetPosts(
	options?: Omit<UseQueryOptions<Post[], unknown>, 'queryKey' | 'queryFn'>
) {
	return useQuery({
		queryKey: ['get posts'],
		queryFn: getPosts,
		...options
	})
}
