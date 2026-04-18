import { UserAvatar } from '@/entities/User'
import { useGetMeQuery } from '@/shared/api/hooks'
import { getUploadUrl } from '@/shared/lib/uploads'
import { PostCardUserInfoProps } from '../types'
import styles from './PostCardUserInfo.module.css'

export const PostCardUserInfo = (props: PostCardUserInfoProps) => {
	const { data, isLoading, isPending } = useGetMeQuery()
	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<UserAvatar img={getUploadUrl(data?.avatar_url)} />
			</div>
			<div className={styles.right}></div>
		</div>
	)
}
