'use client'

import {useGetMeQuery} from '@/shared/api/hooks/useGetMeQuery'
import {Avatar, AvatarImage} from '@/shared/components/ui/Avatar'
import {Spinner} from '@/shared/components/ui/Spinner'
import {API_URL} from '@/shared/constants/root.constants'

export const HeaderAvatar = () => {
	const {data, isLoading, isPending} = useGetMeQuery()

	return (
		<>
			{isLoading || isPending ? (
				<Spinner className='size-10' color='var(--primary)' />
			) : (
				<Avatar className='size-10'>
					<AvatarImage src={`${API_URL}${data?.avatar_url}`} />
				</Avatar>
			)}
		</>
	)
}
