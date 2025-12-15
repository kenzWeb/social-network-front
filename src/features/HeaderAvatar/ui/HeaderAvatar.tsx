'use client'

import {useGetMeQuery} from '@/shared/api/hooks/useGetMeQuery'
import {Avatar, AvatarImage} from '@/shared/components/ui/Avatar'
import {Spinner} from '@/shared/components/ui/Spinner'
import {getUploadUrl} from '@/shared/lib/uploads'

export const HeaderAvatar = () => {
	const {data, isLoading, isPending} = useGetMeQuery()

	return (
		<>
			{isLoading || isPending ? (
				<Spinner className='size-10' color='var(--primary)' />
			) : (
				<Avatar className='size-10'>
					<AvatarImage src={getUploadUrl(data?.avatar_url)} />
				</Avatar>
			)}
		</>
	)
}
