'use client'

import {useGetMeQuery} from '@/shared/api/hooks/useGetMeQuery'
import {Avatar, AvatarImage} from '@/shared/components/ui/Avatar'
import {API_URL} from '@/shared/constants/root.constants'

export const HeaderAvatar = () => {
	const {data, isLoading, isPending} = useGetMeQuery()

	return (
		<Avatar>
			<AvatarImage src={`${API_URL}${data?.avatar_url}`} />
		</Avatar>
	)
}
