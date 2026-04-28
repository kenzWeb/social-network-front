import { User } from '@/shared/types/api'

export interface PostCardUserInfoProps {
	post: User
	updatedAt: string
	isLoading?: boolean
	isPending?: boolean
}
