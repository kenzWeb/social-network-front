import { Loader } from '@/entities/Loader'
import { useGetMeQuery } from '@/shared/api/hooks'
import { UserAvatar } from '@/shared/components/UserAvatar'
import { PostCardUserInfoProps } from '../types'
import styles from './PostCardUserInfo.module.css'

export const PostCardUserInfo = (props: PostCardUserInfoProps) => {
	const { data, isLoading, isPending } = useGetMeQuery()
	return (
		<>
			<div className={styles.left}>
				<Loader isLoading={isLoading} isPending={isPending} type="children">
					<UserAvatar
						img={data?.avatar_url}
						AvatarClass={styles.avatar}
						AvatarImgClass={styles.avatarImg}
					/>
				</Loader>
				<h2 className={styles.name}>{data?.first_name}</h2>
			</div>
			<div className={styles.right}>
				<h2 className={styles.username}>@{data?.username}</h2>
				<h2 className={styles.fullname}>
					{data?.first_name} {data?.last_name}
				</h2>
			</div>
		</>
	)
}
