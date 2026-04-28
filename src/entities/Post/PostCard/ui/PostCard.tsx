import { useGetPosts } from '@/shared/api/hooks'
import { PostCardContent } from '../../PostCardContent'
import { PostCardUserInfo } from '../../PostCardUserInfo'
import { PostCardProps } from '../types'
import styles from './PostCard.module.css'

export const PostCard = (props: PostCardProps) => {
	const { data, isLoading, isPending } = useGetPosts()
	return (
		<>
			{data &&
				data?.map(post => (
					<div key={post.id} className={styles.wrapper}>
						<PostCardUserInfo
							post={post.user!}
							updatedAt={post.updated_at!}
							isLoading={isLoading}
							isPending={isPending}
						/>
						<PostCardContent />
					</div>
				))}
		</>
	)
}
