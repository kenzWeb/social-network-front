import { Skill } from '@/shared/types/api'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { getSkills } from '../requests/skill'

export function useGetSkills(options?: Omit<UseQueryOptions<Skill[], unknown>, 'queryKey' | 'queryFn'>) {
	return useQuery({
		queryKey: ['get skills'],
		queryFn: getSkills,
		...options,
	})
}