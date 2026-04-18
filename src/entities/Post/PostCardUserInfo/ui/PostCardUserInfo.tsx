import { useGetMeQuery } from '@/shared/api/hooks'
import { Avatar, AvatarImage } from '@/shared/components/ui/Avatar'
import { getUploadUrl } from '@/shared/lib/uploads'
import { PostCardUserInfoProps } from '../types'
import styles from './PostCardUserInfo.module.css'

export const PostCardUserInfo = (props: PostCardUserInfoProps) => {
	const { data, isLoading, isPending } = useGetMeQuery()
	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<Avatar className={styles.avatar}>
					<AvatarImage className={styles.avatarImg} src={getUploadUrl(data?.avatar_url)} />
				</Avatar>
			</div>
			<div className={styles.right}></div>
		</div>
	)
}
